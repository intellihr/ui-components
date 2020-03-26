### Table

```jsx
import { Text } from '@Domain/Typographies';
import { Variables, Props } from '@Common';
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = { fileNameSort: undefined, createAtSort: 'down'};

<Table
  rows={[
        {
            id: '0',
            data: {fileName: 'fail.pdf', createAt: '05/01/2018', size: '8.2', fileType: 'PDF'},
            isSelectable: false,
            isRemovable: true,
            variant: 'red',
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
            contentOverride: (data)=> ([
                             <Text>{data.fileName}</Text>,
                             <div>
                                 <Text color={Variables.Color.n500} margins={{right: Variables.Spacing.sXSmall}}>Uploading</Text>
                                 <Text color={Variables.Color.n500}>{data.size}MB</Text>
                             </div>
                             ])
          },
        {
            id: '2',
            data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
            isSelectable: false,
            isRemovable: true,
            progress: 1,
            contentOverride: (data)=> ([
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
    ]}
  columns={[
        {
            name: 'fileName', 
            title: 'file name',
            size: 'auto',
            content: (data)=> <Text>{data.fileName}</Text>,
            sort: state.fileNameSort, 
            alignment: 'left',
            onSortChange: (sort) => setState({ fileNameSort: state.fileNameSort ? (state.fileNameSort==='down' ? 'up' : undefined) : 'down' }),
            tooltipText: (data)=> `${data.fileType}(file type): ${data.size}MB (size)`
          },
          {
            name: 'createAt', 
            title: 'created at',
            size: 'shrink',
            content: (data)=> <Text>{data.createAt}</Text>,
            sort: state.createAtSort, 
            onSortChange: (sort) => setState({ createAtSort: state.createAtSort ? (state.createAtSort==='down' ? 'up' : undefined) : 'down' })
          }
    ]}
 />
```

### Mobile Table

```jsx
import { Text } from '@Domain/Typographies';
import { Variables, Props } from '@Common';
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = { fileNameSort: undefined, createAtSort: 'down'};

<Table
    isMobile
  rows={[
        {
            id: '0',
            data: {fileName: 'fail.pdf', createAt: '05/01/2018', size: '8.2', fileType: 'PDF'},
            isSelectable: false,
            isRemovable: true,
            variant: 'red',
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
            isSelectable: false,
            isRemovable: true,
            progress: 1,
            contentOverride: (data)=> ([
                             <Text>{data.fileName}</Text>,
                             <FontAwesomeIcon
                                  type='regular'
                                  icon='check'
                                  color={Variables.Color.i400}
                              />
                            ])
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
    ]}
  columns={[
        {
            name: 'fileName', 
            title: 'file name',
            size: 'auto',
            content: (data)=> <Text>{data.fileName}</Text>,
            sort: state.fileNameSort, 
            alignment: 'left',
            onSortChange: (sort) => setState({ fileNameSort: state.fileNameSort ? (state.fileNameSort==='down' ? 'up' : undefined) : 'down' }),
            tooltipText: (data)=> `${data.fileType}(file type): ${data.size}MB (size)`
          },
          {
            name: 'createAt', 
            title: 'created at',
            size: 'shrink',
            content: (data)=> <Text>{data.createAt}</Text>,
            sort: state.createAtSort, 
            onSortChange: (sort) => setState({ createAtSort: state.createAtSort ? (state.createAtSort==='down' ? 'up' : undefined) : 'down' })
          }
    ]}
 />
```

