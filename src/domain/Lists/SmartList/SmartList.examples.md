#### Basic Smart List

```jsx
<SmartList
  data={[
    {
      name: 'Blue Card',
      issuingOrganisation: 'Queensland Gov.',
      expiryDate: '11 Nov 2004',
      status: 'Expired'
    },
    {
      name: 'Green Card',
      issuingOrganisation: 'Western Australia Gov.',
      expiryDate: '05 Feb 2017',
      status: 'Current'
    }
  ]}
>
  <SmartList.Column
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
    tooltipText='This is a test tooltip'
    cell={(row) =>
      <div>
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </div>
    }
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```
#### Smart List with custom row wrapper

```jsx
<SmartList
  data={[
    {
      name: 'Blue Card',
      issuingOrganisation: 'Queensland Gov.',
      expiryDate: '11 Nov 2004',
      status: 'Expired'
    },
    {
      name: 'Green Card',
      issuingOrganisation: 'Western Australia Gov.',
      expiryDate: '05 Feb 2017',
      status: 'Current'
    }
  ]}
  rowWrapper={({row, children, defaultProps}) => {
    return (
      <SmartList.Row
       {...defaultProps}
       className='alert'
      >
        {children}
      </SmartList.Row>
    )
  }}
>
  <SmartList.Column
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
    tooltipText='This is a test tooltip'
    cell={(row) =>
      <div>
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </div>
    }
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```

#### Smart List with limit

```jsx
<SmartList
  data={[
    {
      name: 'Blue Card',
      issuingOrganisation: 'Queensland Gov.',
      expiryDate: '11 Nov 2004',
      status: 'Expired'
    },
    {
      name: 'Green Card',
      issuingOrganisation: 'Western Australia Gov.',
      expiryDate: '05 Feb 2017',
      status: 'Current'
    },
    {
      name: 'Yellow Card',
      issuingOrganisation: 'South Australia Gov.',
      expiryDate: '11 Nov 2004',
      status: 'Expired'
    },
    {
      name: 'Pink Card',
      issuingOrganisation: 'Victoria Gov.',
      expiryDate: '08 April 2017',
      status: 'Current'
    }
  ]}
  limit={2}
>
  <SmartList.Column
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
    cell={(row) =>
      <div>
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </div>
    }
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```

#### Empty Smart List

```jsx
<SmartList
  data={[]}
>
  <SmartList.Column
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
    cell={(row) =>
      <div>
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </div>
    }
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```

#### Skeleton Smart List

```jsx
<SmartList
  skeletonOptions={{
    showSkeleton: true,
    numberOfRows: 5
  }}
>
  <SmartList.Column
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
  />
</SmartList>
```

#### Loading Smart List

```jsx
<SmartList
  data={[]}
  loading
>
  <SmartList.Column
    size={{
      md: 6,
      lg: 6
    }}
    header='Qualification'
    cell={(row) =>
      <div>
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </div>
    }
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />

  <SmartList.Column
    size={{
      md: 3,
      lg: 3
    }}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```
