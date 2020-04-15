### Table

```jsx
import { Text } from '@Domain/Typographies';
import { Variables, Props } from '@Common';
import { FontAwesomeIcon } from '@Domain/Icons';
import { FontAwesomeIconButton, Button} from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { TextInput } from '@Domain/Inputs';

const successRowContentOverride = (
                                      (data)=> ([
                                                   <Text>{data.fileName}</Text>,
                                                   <div>
                                                       <Text color={Variables.Color.i400} margins={{right: Variables.Spacing.sXSmall}}>Success</Text>
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
                                                 <Text>{data.fileName}</Text>,
                                                 <div>
                                                     <Text color={Variables.Color.n500} margins={{right: Variables.Spacing.sXSmall}}>Uploading</Text>
                                                     <Text color={Variables.Color.n500}>{data.size}MB</Text>
                                                 </div>
                                                 ])
                                  );

initialState = {
sort: {createAt: 'down'},
hasSuccessRowContent: true,
selectedDataSet: [],
successProgress: 0.5,
rows: [
              {
                  id: '0',
                  data: {fileName: 'fail.pdf', createAt: '05/01/2018', size: '8.2', fileType: 'PDF'},
                  isSelectable: false,
                  isRemovable: true,
                  variant: 'red',
                  onClick: (data) => alert(`Error on ${data.fileName}`),
                  contentOverride: (data)=> ([
                                               <Text>{data.fileName}</Text>,
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
                  contentOverride: uploadingRowContentOverride
                },
              {
                  id: '2',
                  data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
                  isSelectable: false,
                  isRemovable: true,
                  progress: 0.5,
                  contentOverride: uploadingRowContentOverride
                },
              {
                  id: '3',
                  data: {fileName: 'test.pdf', createAt: '05/01/2018', size: '2.2', fileType: 'PDF'},
                  isSelectable: true
                },
              {
                  id: '4',
                  data: {fileName: 'test1.pdf', createAt: '05/01/2018', size: '1.5', fileType: 'PDF'},
                  isSelectable: true
                },
             {
                 id: '5',
                 data: {fileName: 'test3.pdf', createAt: '05/01/2018', size: '1.8', fileType: 'PDF'},
                 isSelectable: false,
                 contentOverride: (data)=> (
                                                <GridLayout gutterMarginX={Variables.Spacing.sMedium}>
                                                     <GridLayout.Cell size = 'auto'>
                                                        <TextInput value={data.fileName}/>
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
                     contentOverride: successRowContentOverride
                   };

const successRowToNormal = {
                     id: '2',
                     data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
                     isSelectable: true,
                     isRemovable: false
                   };

<div>
    <Button margins={{ bottom: 10}} onClick={() => setState({rows: [state.rows[0], state.rows[1]].concat([successRowTo100, state.rows[3], state.rows[4], state.rows[5]])})}>
        update success row progress to 100%
     </Button>
    <Button margins={{ bottom: 10}} onClick={() => setState({rows: [state.rows[0], state.rows[1]].concat([successRowToNormal, state.rows[3], state.rows[4], state.rows[5]])})}>
        update success row back to normal (after 3 secs)
     </Button>
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
      onSelectionChanged = {(dataSet) => setState({selectedDataSet:dataSet})}
      rows={state.rows}
      sort={state.sort}
      onSortChange={(sort) => setState({sort})}
      columns={[
            {
                name: 'fileName',
                title: 'file name',
                size: 'auto',
                content: (data)=> <Text>{data.fileName}</Text>,
                alignment: 'left',
                tooltipText: (data)=> `${data.fileType}(file type): ${data.size}MB (size)`
              },
              {
                name: 'createAt',
                title: 'created at',
                size: 'shrink',
                content: (data)=> <Text>{data.createAt}</Text>,
                alignment: 'right',
                hoverActions: (data) => (
                                            [
                                                    {
                                                        icon:'file-download',
                                                        type:'solid',
                                                        tooltipText:'Download',
                                                        onClick: () => alert(`download action on ${data.fileName}`)
                                                    },
                                                    {
                                                        icon:'trash',
                                                        type:'solid',
                                                        tooltipText:'Delete',
                                                        onClick: () => alert(`delete action on ${data.fileName}`)
                                                    }
                                            ]
                                        )
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

initialState = {
sort: {createAt: 'down'}
};

const removeableRowActions = ([
                        {
                            icon:'trash',
                            type:'solid',
                            tooltipText:'Delete',
                            onClick: () => alert('delete')
                        }
                    ])

const rowActions = ([
                        {
                            icon:'link',
                            type:'solid',
                            tooltipText:'Copy Link',
                            onClick: () => alert('copy link')
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
  isMobile
  onSelectionChanged = {(dataSet) => console.log(dataSet)}
  onProgressEnd = {(data) => setState({hasSuccessRowContent:false})}
  rows={[
        {
            id: '0',
            data: {fileName: 'fail.pdf', createAt: '05/01/2018', size: '8.2', fileType: 'PDF'},
            isSelectable: false,
            isRemovable: true,
            variant: 'red',
            onClick: (data) => alert(`Error on ${data.fileName}`),
            swipeActions: removeableRowActions,
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
            swipeActions: removeableRowActions,
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
            contentOverride: state.hasSuccessRowContent ? successRowContentOverride : undefined,
            swipeActions: state.hasSuccessRowContent ? rowActions : undefined
          },
        {
            id: '3',
            data: {fileName: 'test.pdf', createAt: '05/01/2018', size: '2.2', fileType: 'PDF'},
            isSelectable: true,
            swipeActions: rowActions
          },
        {
            id: '4',
            data: {fileName: 'test1.pdf', createAt: '05/01/2018', size: '1.5', fileType: 'PDF'},
            isSelectable: true,
            swipeActions: rowActions 
          }
    ]}
      sort={state.sort}
      onSortChange={(sort) => setState({sort})}
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
            title: 'created at',
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
sort: {createAt: 'down'}
};

<Table
  onSelectionChanged = {(dataSet) => console.log(dataSet)}
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
            title: 'file name',
            size: 'auto',
            content: (data)=> <Text>{data.fileName}</Text>,
            alignment: 'left'
          },
          {
            name: 'createAt',
            title: 'created at',
            size: 'shrink',
            content: (data)=> <Text>{data.createAt}</Text>,
            alignment: 'right'
          }
    ]}
 />
```


