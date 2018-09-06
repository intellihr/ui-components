// tslint:disable-next-line:no-namespace
namespace Utils {
  /**
   * The smoothstep function, returning a smooth gradient between two points.
   * See https://en.wikipedia.org/wiki/Smoothstep
   *
   * @param {number} start
   * @param {number} end
   * @param {number} point
   * @returns {number} interpolatedPoint
   */
  export function smoothStep (start: number, end: number, point: number) {
    if (point <= start) {
      return 0
    }

    if (point >= end) {
      return 1
    }

    const x = (point - start) / (end - start)
    return x * x * (3 - 2 * x)
  }

  interface ISmoothUpdateArguments {
    startValue: number,
    endValue: number,
    msTotal?: number,
    msPerStep?: number,
    callback: (currentValue: number) => boolean,
    easing?: (start: number, end: number, point: number) => number
  }

  /**
   * Updates a given value asynchronously over time using an easing function.
   *
   * @param args
   * @param args.startValue - value to start at
   * @param args.endValue - value to end at
   * @param args.msTotal=500 - milliseconds taken to update
   * @param args.msPerStep=10 - milliseconds per individual step
   * @param args.callback - callback after each step; return false to stop updating
   * @param args.easing=smoothStep - easing function for making updates smoother
   */
  export function smoothUpdate (args: ISmoothUpdateArguments): Promise<void> {
    const {
      startValue,
      endValue,
      callback,
      msTotal = 500,
      msPerStep = 10,
      easing = smoothStep
    } = args

    const shift = endValue - startValue

    return new Promise<void>((resolve) => {
      const numSteps = Math.ceil(msTotal / msPerStep)
      let currentStep = 0

      const update = () => {
        currentStep += 1
        const newValue = startValue + shift * easing(0, numSteps, currentStep)

        if (!callback(newValue) || currentStep >= numSteps) {
          return resolve()
        }

        setTimeout(update, msPerStep)
      }

      setTimeout(update, msPerStep)
    })
  }
}

export {
  Utils
}
