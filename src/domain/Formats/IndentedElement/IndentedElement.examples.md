# Indented Element

## Basic usage

```jsx
<div>
    <IndentedElement
      depth={0}
    >
      Parent (no depth)
    </IndentedElement>
    <IndentedElement
      depth={1}
    >
      Child A
    </IndentedElement>
    <IndentedElement
      depth={2}
    >
      Child A1
    </IndentedElement>
    <IndentedElement
      depth={1}
    >
      Child B
    </IndentedElement>
    <IndentedElement
      depth={1}
    >
      Child C
    </IndentedElement>
    <IndentedElement
      depth={2}
    >
      Child C1
    </IndentedElement>
    <IndentedElement
      depth={2}
    >
      Child C2
    </IndentedElement>
    <IndentedElement
      depth={3}
    >
      Child C2a
    </IndentedElement>
</div>
```

## Indented select input options

```jsx
initialState = { value: null };

class CustomOption extends React.PureComponent {
  render () {
    const {
      depth,
      label
    } = this.props.option
  
    return <div
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSelect(this.props.option, event);
      }}
    >
    <IndentedElement depth={depth}>{label}</IndentedElement>
    </div>
  }
}

  <SelectInput
    name='testInput'
    value={state.value}
    options={[
      {
        label: 'Hello World',
        value: 20,
        depth: 0
      },
      {
        label: 'Try selecting me',
        value: 40,
        depth: 1
      }
    ]}
    handleChange={(option) => {
      setState({ value: option.value })
    }}
    optionComponent={CustomOption}
  />
```

## Indented smart list cell content

```jsx
const { ListColumn } = require('../SmartList/ListColumn');

<SmartList
  data={[
    {
      name: 'Blue Card',
      issuingOrganisation: 'Queensland Gov.',
      expiryDate: '11 Nov 2004',
      status: 'Expired',
      depth: 0
    },
    {
      name: 'Green Card',
      issuingOrganisation: 'Western Australia Gov.',
      expiryDate: '05 Feb 2017',
      status: 'Current',
      depth: 1
    }
  ]}
>
  <ListColumn
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
    tooltipText='This is a test tooltip'
    cell={(row) =>
      <IndentedElement
        depth={row.depth}
      >
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </IndentedElement>
    }
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />

  <ListColumn
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```
