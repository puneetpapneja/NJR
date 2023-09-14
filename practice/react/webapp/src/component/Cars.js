import styles from './Cars.module.css';
export default function Cars(props){
    const obj=props.list.find(o=>o.name===props.name);
    return(
          <div className={styles.main}>
            <div id={styles.img}>
                <img src={obj.img} alt=""/>
            </div>
            <div className={styles.outer}>
                <div className={styles.inner1}>
                    <center><h4>features</h4></center>
                    <ul>
                        <li className={styles.fea}>{obj.features[0]}</li>
                        <li className={styles.fea}>{obj.features[1]}</li>
                        <li className={styles.fea}>{obj.features[2]}</li>
                        <li className={styles.fea}>{obj.features[3]}</li>
                    </ul>
                </div>
                <div className={styles.inner2}>
                    <center><h4>specifications</h4></center>
                    <ul>
                        <li className={styles.spe}>{obj.specifications.EngineDisplacement}</li>
                        <li className={styles.spe}>{obj.specifications.No_of_cylinder}</li>
                        <li className={styles.spe}>{obj.specifications.Max_Power }</li>
                        <li className={styles.spe}>{obj.specifications.Max_Torque}</li>
                    </ul>
                </div>
            </div>
          </div>
    )
}
// let index = 0;
//     setInterval(() => {
//       if (index === images.length) index = 0;
//       let i = document.getElementById("im");
//       i.src = images[index];
//       // console.log(i);
//       index++;
//     }, 3000);