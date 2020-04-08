### Table

```jsx
import { Text } from '@Domain/Typographies';
import { Variables, Props } from '@Common';
import { FontAwesomeIcon } from '@Domain/Icons';
import { FontAwesomeIconButton, Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';

const checkboxOverride = (
                                (data) => (
                                             <FontAwesomeIconButton
                                                icon='times'
                                                type='regular'
                                                onClick={() => alert(`Delete action on ${data.fileName}`)}
                                                tooltipText='Delete'
                                              />
                                         )
                            );

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
sort: {fileName: undefined, createAt: 'down'},
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
                  checkboxOverride: (data) => (
                                                  <FontAwesomeIconButton
                                                     icon='times'
                                                     type='regular'
                                                     onClick={() => alert(`Delete action on ${data.fileName}`)}
                                                     tooltipText='Delete'
                                                     variant='red'
                                                   />
                                              ),
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
                  checkboxOverride: checkboxOverride,
                  contentOverride: uploadingRowContentOverride
                },
              {
                  id: '2',
                  data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
                  isSelectable: false,
                  isRemovable: true,
                  progress: 0.5,
                  checkboxOverride: checkboxOverride,
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
                }
          ]
};

const successRowTo100 = {
                     id: '2',
                     data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
                     isSelectable: false,
                     isRemovable: true,
                     progress: 1,
                     checkboxOverride: checkboxOverride,
                     contentOverride: successRowContentOverride
                   };

const successRowBackToNormal = {
                     id: '2',
                     data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
                     isSelectable: true,
                     isRemovable: false
                   };

<div>
    {Object.entries(state.sort).map(([name, sort]) => <div>{name} : {sort}</div>)}
    <Button margins={{ bottom: 10}} onClick={() => setState({rows: [state.rows[0], state.rows[1]].concat([successRowTo100, state.rows[3], state.rows[4]])})}>
        update success progress %
     </Button>
    <Table
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
      onProgressEnd = {(data) => setState({rows: [state.rows[0], state.rows[1]].concat([successRowBackToNormal, state.rows[3], state.rows[4]])})}
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
sort: {fileName: undefined, createAt: 'down'},
hasSuccessRowContent: true
};

const rowActions = ([
                        {
                            icon:'link',
                            type:'solid',
                            tooltipText:'Copy Link'
                        },
                        {
                            icon:'pencil-alt',
                            type:'solid',
                            tooltipText:'Rename'
                        },
                        {
                            icon:'file-download',
                            type:'solid',
                            tooltipText:'Download'
                        },
                        {
                            icon:'trash',
                            type:'solid',
                            tooltipText:'Delete'
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
            contentOverride: (data)=> ([
                             <Text>{data.fileName}</Text>,
                             <Text color={Variables.Color.n500}>{data.size}MB</Text>
                             ])
          },
        {
            id: '2',
            data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
            isSelectable: !state.hasSuccessRowContent,
            isRemovable: state.hasSuccessRowContent,
            progress: 0.5,
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
            size: 'auto',
            content: (data)=> <Text>{data.fileName}</Text>,
            alignment: 'left',
            tooltipText: (data)=> `${data.fileType}(file type): ${data.size}MB (size)`
          },
          {
            title: 'created at',
            size: 'shrink',
            content: (data)=> <Text>{data.createAt}</Text>,
            alignment: 'right'
          }
    ]}
 />
```
