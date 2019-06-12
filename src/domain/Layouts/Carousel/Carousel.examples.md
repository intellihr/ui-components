#### Carousel

```jsx
import { Statistic } from '@Domain/Formats';

<Carousel>
  <Carousel.Tile>
    <Statistic
      title='Total Cost'
      prefix='AUD'
      value='99.00'
    />
  </Carousel.Tile>
  <Carousel.Tile>
    <Statistic
      title='Total Cost'
      prefix='AUD'
      value='99.00'
    />
  </Carousel.Tile>
  <Carousel.Tile>
    <Statistic
      title='Total Cost'
      prefix='AUD'
      value='99.00'
    />
  </Carousel.Tile>
  <Carousel.Tile>
    <Statistic
      title='Total Cost'
      prefix='AUD'
      value='99.00'
    />
  </Carousel.Tile>
  <Carousel.Tile>
    <Statistic
      title='Total Cost'
      prefix='AUD'
      value='99.00'
    />
  </Carousel.Tile>
  <Carousel.Tile>
    <Statistic
      title='Total Cost'
      prefix='AUD'
      value='99.00'
    />
  </Carousel.Tile>
  <Carousel.Tile>
    <Statistic
      title='Total Cost'
      prefix='AUD'
      value='99.00'
    />
  </Carousel.Tile>
  <Carousel.Tile>
    <Statistic
      title='Total Cost'
      prefix='AUD'
      value='99.00'
    />
  </Carousel.Tile>
</Carousel>
```

#### Carousel with custom children

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  height: '200px',
  display: 'inline-block',
  width: '200px',
  borderRadius: '4px'
};

<Carousel>
  <div style={style}/>
  <div style={style}/>
  <div style={style}/>
  <div style={style}/>
  <div style={style}/>
  <div style={style}/>
  <div style={style}/>
  <div style={style}/>
  <div style={style}/>
  <div style={style}/>
</Carousel>
```
