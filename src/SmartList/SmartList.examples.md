## Basic Smart List

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
  <ListColumn
    size={6}
    header='Qualification'
    cell={(row) =>
      <div>
        <b>{row.name}</b>
        <div>{row.issuingOrganisation}</div>
      </div>
    }
  />
  
  <ListColumn
    size={3}
    header='Expiry Date'
    cell={(row) => row.expiryDate}
  />
  
  <ListColumn
    size={3}
    header='Status'
    cell={(row) => row.status}
  />
</SmartList>
```
