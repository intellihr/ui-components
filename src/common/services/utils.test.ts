import { Utils } from './utils'

describe('Utility functions', () => {
  describe('smoothStep', () => {
    it('should return the expected values', () => {
      expect(
        Utils.smoothStep(100, 200, 50)
      ).toEqual(0)
      expect(
        Utils.smoothStep(100, 200, 300)
      ).toEqual(1)
      expect(
        Math.round(Utils.smoothStep(100, 200, 110) * 1000)
      ).toEqual(28)
    })
  })

  describe('smoothUpdate', () => {
    it('should call the callback with the expected values', async () => {
      const callback = jest.fn(() => true)
      const easing = (_: number, numSteps: number, currentStep: number) => (currentStep / numSteps)

      await Utils.smoothUpdate({
        startValue: 100,
        endValue: 200,
        msTotal: 100,
        msPerStep: 10,
        callback,
        easing
      })

      expect(callback).toHaveBeenCalledTimes(10)
      expect(callback).toBeCalledWith(110)
      expect(callback).toBeCalledWith(150)
      expect(callback).toBeCalledWith(200)
    })


    it('should return early if the callback returns false', async () => {
      const callback = jest.fn(() => false)

      await Utils.smoothUpdate({
        startValue: 100,
        endValue: 200,
        msTotal: 100,
        msPerStep: 10,
        callback
      })

      expect(callback).toHaveBeenCalledTimes(1)
    })
  })
})
