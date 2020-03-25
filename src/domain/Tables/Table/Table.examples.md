### Table

```jsx
import { Text } from '@Domain/Typographies';

initialState = { fileNameSort: undefined, createAtSort: 'down'};

<>
    <Table
      rows={[
            {
                tooltipText: 'PDF(file type): 2.2MB (size)',
                data: {fileName: 'test.pdf', createAt: '05/01/2018'}
              },
            {
                tooltipText: 'PDF(file type): 2.2MB (size)',
                data: {fileName: 'test1.pdf', createAt: '05/01/2018'}
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
                onSortChange: (sort) => setState({ fileNameSort: state.fileNameSort ? (state.fileNameSort==='down' ? 'up' : undefined) : 'down' })
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
</>
```
