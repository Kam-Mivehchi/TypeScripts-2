const Table = ({ data, column }) => {
    return (
    <div className="flex justify-center">
      <table className="border" >
        <thead className="border-4">
          <tr className="border-x">
            {column.map((item, index) => <TableHeadItem item={item} />)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => <TableRow item={item} column={column} />)}
        </tbody>
      </table>
      </div>
    )
  }
  
  const TableHeadItem = ({ item }) => <th>{item.heading}</th>
  const TableRow = ({ item, column }) => (
    <tr>
      {column.map((columnItem, index) => {
  
        if(columnItem.value.includes('.')) {
          const itemSplit = columnItem.value.split('.') //['address', 'city']
          return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
        }
  
        return <td>{item[`${columnItem.value}`]}</td>
      })}
    </tr>
  )
  
  export default Table