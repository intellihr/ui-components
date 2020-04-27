### Table

```jsx
import { Text } from '@Domain/Typographies';
import { Variables, Props } from '@Common';
import { FontAwesomeIcon } from '@Domain/Icons';
import { FontAwesomeIconButton, Button} from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { TextInput } from '@Domain/Inputs';

const rowActions = ([
{
  icon:'link',
  type:'solid',
  tooltipText:'Copy Link',
  onClick: () => alert('copy link')
},
{
  icon:'pencil-alt',
  type:'solid',
  tooltipText:'Rename',
  onClick: () => alert('rename')
},
{
  icon:'file-download',
  type:'solid',
  tooltipText:'Download',
  onClick: () => alert('download')
},
{
  icon:'trash',
  type:'solid',
  tooltipText:'Delete',
  onClick: () => alert('delete')
}
])

const successRowContentOverride = (
(data)=> ([
  <Text isTruncated isInline={false}>{data.fileName}</Text>,
  <div>
     <Text  color={Variables.Color.i400} margins={{right: Variables.Spacing.sXSmall}}>Success</Text>
     <FontAwesomeIcon
       type='regular'
       icon='check'
       color={Variables.Color.i400}
     />
   </div>
  ])
);

const uploadingRowContentOverride = (
(data)=> ([
  <Text isTruncated isInline={false}>{data.fileName}</Text>,
  <div>
    <Text color={Variables.Color.n500} margins={{right: Variables.Spacing.sXSmall}}>Uploading</Text>
    <Text color={Variables.Color.n500}>{data.size}MB</Text>
  </div>
  ])
);

initialState = {
  sort: {createAt: 'ascending'},
  hasSuccessRowContent: true,
  selectedDataSet: [],
  successProgress: 0.5,
  rows: [
    {
      id: '0',
      data: {fileName: 'fail.pdf', createAt: '05/01/2018', size: '8.2', fileType: 'PDF'},
      isSelectable: false,
      isRemovable: true,
      variant: 'error',
      onClick: (data) => alert(`Error on ${data.fileName}`),
      actions: rowActions,
      contentOverride: (data)=> ([
        <Text isTruncated isInline={false}>{data.fileName}</Text>,
        <div>
          <Text color={Variables.Color.r400} margins={{right: Variables.Spacing.sXSmall}}>Error</Text>
          <FontAwesomeIcon
            type='regular'
            icon='exclamation-triangle'
            color={Variables.Color.r400}
          />
        </div>
      ])
    },
    {
      id: '1',
      data: {fileName: 'uploading.pdf', createAt: '05/01/2018', size: '99', fileType: 'PDF'},
      isSelectable: false,
      isRemovable: true,
      progress: 0.7,
      actions: rowActions,
      contentOverride: uploadingRowContentOverride
    },
    {
      id: '2',
      data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
      isSelectable: false,
      isRemovable: true,
      progress: 0.5,
      actions: rowActions,
      contentOverride: uploadingRowContentOverride
    },
    {
      id: '3',
      data: {fileName: 'test.pdf', createAt: '05/01/2018', size: '2.2', fileType: 'PDF'},
      isSelectable: true,
      actions: rowActions
    },
    {
      id: '4',
      data: {fileName: 'test1.pdf', createAt: '05/01/2018', size: '1.5', fileType: 'PDF'},
      isSelectable: true,
      actions: rowActions
    },
    {
      id: '5',
      data: {fileName: 'test1_test1_test1_test1_final_final_final_final_final_final_final.pdf', createAt: '05/01/2018', size: '1.5', fileType: 'PDF'},
      isSelectable: true,
      actions: rowActions
    },
    {
      id: '6',
      data: {fileName: 'test3.pdf', createAt: '05/01/2018', size: '1.8', fileType: 'PDF'},
      isSelectable: false,
      actions: rowActions,
      contentOverride: (data)=> (
        <GridLayout gutterMarginX={Variables.Spacing.sMedium}>
          <GridLayout.Cell size = 'auto'>
            <TextInput value={data.fileName.split('.')[0]}/>
          </GridLayout.Cell>
          <GridLayout.Cell size = 'shrink'>
            <Button type='primary' key='button1'>Confirm</Button>
          </GridLayout.Cell>
          <GridLayout.Cell size = 'shrink'>
            <Button type='light' key='button1'>Cancel</Button>
          </GridLayout.Cell>
        </GridLayout>
      )
    }
  ]
};

const successRowTo100 = {
  id: '2',
  data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
  isSelectable: false,
  isRemovable: true,
  progress: 1,
  actions: rowActions,
  contentOverride: successRowContentOverride
};

const successRowToNormal = {
  id: '2',
  data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
  isSelectable: true,
  isRemovable: false,
  actions: rowActions
};

<div>
  <Button margins={{ bottom: 10}} onClick={() => setState({rows: state.rows.slice(1)})}>
    Remove First Row
   </Button>
  {
    state.rows.length === 7 && (
      <div>
      <Button margins={{ bottom: 10}} onClick={() => setState({rows: [state.rows[0], state.rows[1]].concat([successRowTo100, state.rows[3], state.rows[4], state.rows[5], state.rows[6]])})}>
        Update Success Row Progress To 100%
       </Button>
      <Button margins={{ bottom: 10}} onClick={() => setState({rows: [state.rows[0], state.rows[1]].concat([successRowToNormal, state.rows[3], state.rows[4], state.rows[5], state.rows[6]])})}>
        Update Success Row To Normal Content (after 3 secs)
       </Button>
      </div>
    )
  }

  <Table
    hasLeftAction
    onRowRemove = {(data) => alert(`Remove row action on ${data.fileName}`)}
    emptyState = {
      <div style={{textAlign: 'center'}}>
        <Text isInline={false} type='heading'>
          Could not find any matching search results.
        </Text>
        <Text isInline={false} type='body'>
          Try changing the filters or search term
        </Text>
      </div>
    }
    bulkActions = {[
      {
        icon:'file-download',
        type:'solid',
        tooltipText:'Download',
        onClick: () => alert(`Bulk download action on ${state.selectedDataSet.length} files`)
      },
      {
        icon:'trash',
        type:'solid',
        tooltipText:'Delete',
        onClick: () => alert(`Bulk delete action on ${state.selectedDataSet.length} files`)
      }
    ]}
    onSelectedRowChange = {(dataSet) => {setState({selectedDataSet:dataSet}); console.log(dataSet)}}
    rows={state.rows}
    sort={state.sort}
    onSortChange={(sort) => setState({sort})}
    columns={[
      {
        name: 'fileName',
        title: 'File Name',
        size: 'auto',
        content: (data)=> <Text isTruncated isInline={false}>{data.fileName}</Text>,
        alignment: 'left',
        tooltipText: (data)=> `${data.fileType}(file type): ${data.size}MB (size)`
      },
      {
        name: 'createAt',
        title: 'Date Uploaded',
        size: 'shrink',
        content: (data)=> <Text isTruncated>{data.createAt}</Text>,
        alignment: 'right'
      }
    ]}
  />
</div>
```

### Mobile Table

```jsx
import { Text } from '@Domain/Typographies';
import { Variables, Props } from '@Common';
import { FontAwesomeIcon } from '@Domain/Icons';

const removeableRowActions = ([
  {
    icon:'trash',
    type:'solid',
    tooltipText:'Delete',
    size:'large',
    onClick: () => alert('delete')
  }
])

const rowActions = ([
  {
    icon:'link',
    type:'solid',
    tooltipText:'Copy Link',
    size:'large',
    onClick: () => alert('copy link')
  },
  {
    icon:'file-download',
    type:'solid',
    tooltipText:'Download',
    size:'large',
    onClick: () => alert('download')
  },
  {
    icon:'trash',
    type:'solid',
    tooltipText:'Delete',
    size:'large',
    onClick: () => alert('delete')
  }
])

const successRowContentOverride = (
  (data)=> ([
    <Text>{data.fileName}</Text>,
    <FontAwesomeIcon
      type='regular'
      icon='check'
      color={Variables.Color.i400}
    />
  ])
);
<Table
  interactionType='swipe'
  onProgressEnd = {(data) => setState({hasSuccessRowContent:false})}
  rows={[
    {
      id: '0',
      data: {fileName: 'fail.pdf', createAt: '05/01/2018', size: '8.2', fileType: 'PDF'},
      isSelectable: false,
      isRemovable: true,
      variant: 'error',
      onClick: (data) => alert(`Error on ${data.fileName}`),
      contentOverride: (data)=> ([
        <Text>{data.fileName}</Text>,
        <FontAwesomeIcon
          type='regular'
          icon='exclamation-triangle'
          color={Variables.Color.r400}
        />
      ])
    },
    {
      id: '1',
      data: {fileName: 'uploading.pdf', createAt: '05/01/2018', size: '99', fileType: 'PDF'},
      isSelectable: false,
      isRemovable: true,
      progress: 0.7,
      actions: removeableRowActions,
      contentOverride: (data)=> ([
        <Text>{data.fileName}</Text>,
        <Text color={Variables.Color.n500}>{data.size}MB</Text>
      ])
    },
    {
      id: '2',
      data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
      isSelectable: false,
      isRemovable: true,
      progress: 1,
      contentOverride: successRowContentOverride
      },
    {
      id: '3',
      data: {fileName: 'test.pdf', createAt: '05/01/2018', size: '2.2', fileType: 'PDF'},
      isSelectable: true,
      actions: rowActions
      },
    {
      id: '4',
      data: {fileName: 'test1.pdf', createAt: '05/01/2018', size: '1.5', fileType: 'PDF'},
      isSelectable: true,
      actions: rowActions 
      }
  ]}
  sort={{createAt: 'ascending'}}
  columns={[
    {
      name: 'fileName',
      size: 'auto',
      headerSize: 'shrink',
      content: (data)=> <Text>{data.fileName}</Text>,
      alignment: 'left',
      tooltipText: (data)=> `${data.fileType}(file type): ${data.size}MB (size)`
      },
      {
      name: 'createAt',
      title: 'Date Uploaded',
      size: 'shrink',
      headerSize: 'auto',
      content: (data)=> <Text>{data.createAt}</Text>,
      alignment: 'right'
      }
  ]}
 />
```

### Empty Table

```jsx
import { Text } from '@Domain/Typographies';
import { Variables, Props } from '@Common';

initialState = {
sort: {createAt: 'ascending'}
};

<Table
  rows={[]}
  sort={state.sort}
  onSortChange={(sort) => setState({sort})}
  emptyState = {
    <div style={{textAlign: 'center'}}>
      <Text isInline={false} type='heading'>
        Could not find any matching search results.
      </Text>
      <Text isInline={false} type='body'>
        Try changing the filters or search term
      </Text>
    </div>
  }
  columns={[
    {
      name: 'fileName',
      title: 'File Name',
      size: 'auto',
      content: (data)=> <Text>{data.fileName}</Text>,
      alignment: 'left'
      },
      {
      name: 'createAt',
      title: 'Date uploaded',
      size: 'shrink',
      content: (data)=> <Text>{data.createAt}</Text>,
      alignment: 'right'
      }
  ]}
 />
```


