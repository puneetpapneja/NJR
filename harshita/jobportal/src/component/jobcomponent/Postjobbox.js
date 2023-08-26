import Stack from 'react-bootstrap/Stack';

function Postjobbox(props){
    return (
    
       <div  className="postjobbox">
       <Stack className='stack' direction="horizontal" >
      <span> 
      <h6>{props.heading}</h6>
      </span>
      <span>
      <i class="bi bi-eye"></i>
      </span>
      
    </Stack> 
        <p>{props.subheading}</p>
        <p>{props.body}</p>

       <Stack className='stack' direction="horizontal" >
        <span> 
        <i class="bi bi-trash3"></i>
      </span>
      <span>
      <i class="bi bi-pencil-square"></i>
      </span>
        </Stack>
        
       </div>
        
    );
}
export default Postjobbox;