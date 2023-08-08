import './items.css';
const table = (props)=>{
    const {list: car } = props;
    return (<div className='container'>
            <table>
            <thead>
            <tr>
            <th className='table' colspan="2"><img  src="car2.jpeg" alt='car' ></img></th>
            </tr>
            </thead>

                <tbody>
               
                   <td> <h1>  Features :  </h1></td>
                   <td> <h1>  Features :  </h1></td>
                    {car?.map(item => (
                     <tr>
                        <td>{item.feature}</td>
                        <td>{item.specification}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>);
}

export default table;