const TopUp = ({list, colNames}) => {
  return (
    <div className="w-full">
      {list.length > 0 && (
        <table cellSpacing="0" className="w-full h-auto">
          <thead>
            <tr>
              {colNames.map((colName, index) => (
                <th key={index} className="hidden md:table-cell">{colName}</th>
              ))}
             </tr> 
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td className="block text-center md:max-w-[80px] md:table-cell">{item.date}</td>
                  <td className="block md:table-cell text-right before:content-['Referral'] before:float-left before:font-bold md:before:hidden md:text-center">{item.amount}</td>
                  <td className="block pb-4 text-right before:content-['Earn'] before:float-left before:font-bold md:before:hidden md:table-cell md:pb-0 md:text-center">{item.status}</td>
                </tr>
              ))}
            </tbody>
        </table>
      )}
    </div>
  )
}

export default TopUp
