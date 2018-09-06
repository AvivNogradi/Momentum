import React, {Component} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip,ResponsiveContainer } from 'recharts';
import CustomizedTooltip from '../CustomizedTooltip/CustomizedTooltip'

const data = [
    {name:'יום ראשון', תומכים:200000,מתלבטים:150000, מתנגדים:215000,חסר:350000,פעילים: 146000},
    {name:'יום שני', תומכים:250000,מתלבטים:185000, מתנגדים:212000,חסר:330400,פעילים: 144200},
    {name:'יום שלישי', תומכים:140000,מתלבטים:285500, מתנגדים:115000,חסר:325000,פעילים: 136000},
    {name:'יום רביעי', תומכים:120000,מתלבטים:160000, מתנגדים:115600,חסר:250000,פעילים: 237000},
    {name:'יום חמישי', תומכים:200000,מתלבטים:187000, מתנגדים:117000,חסר:330000,פעילים: 141000},
    {name:'יום שישי', תומכים:250000,מתלבטים:120000, מתנגדים:190100,חסר:335000,פעילים: 252000},
    {name:'יום שבת', תומכים:256000,מתלבטים:145000, מתנגדים:114000,חסר:370000,פעילים: 137000},

];

const dayOfWeek = [
    {1: 'יום ראשון'},
    {2: 'יום שני'},
    {3: 'יום שלישי'},
    {4: 'יום רביעי'},
    {5: 'יום חמישי'},
    {6: 'יום שישי'},
    {7: 'יום שבת'},
]

const styles = {
    chart: {
        display:'flex',
        flexDirection:'row-reverse',
        backgroundColor:'white',
        alignItems:'center',
        width:'80%',
        height:'60%',
        margin:'50px auto',
        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    },
    chartTitle: {
        display: 'flex',
        justifyContent: 'flex-end',
        height:'100%',
        marginRight: '30px',
    }
}
class SummaryChart extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    getDateFormat(date){
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();
        let newDate = `${day}.${month}.${year}`

        return newDate;
    }

    render(){
     
        // let lines =  data.map(el => {
        //     console.log(el.dataKey)})
        //     if(el.dataKey === 'חסר'){
        //         return  <Line type="monotone" dataKey='לא ידוע' stroke={el.stroke} />
        //     }
        //     else{
        //         return  <Line type="monotone" dataKey={el.dataKey} stroke={el.dataKey.stroke} />
        //     }
            
        // });

        return(
            <div style={styles.chart}>
            <div style={styles.chartTitle}>
                <h2 style={{position:'absolute'}}>דוח מסכם</h2>
            </div>
            
                <ResponsiveContainer width="100%" height={420} >
                <LineChart width={1300} height={420} data={data}
                        margin={{ top: 15, right: 0, left: 20, bottom: 5 }}>
                        <CartesianGrid />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomizedTooltip data={data} />}/>
                        <Legend verticalAlign="top" align="left" wrapperStyle={{top:"-8px"}}/>
                        <Line type="monotone" dataKey="תומכים" stroke="#33adff" />
                        <Line type="monotone" dataKey="מתלבטים" stroke="#ff751a" />
                        <Line type="monotone" dataKey="מתנגדים" stroke="#00cc99" />
                        <Line name="לא ידוע" type="monotone" dataKey="חסר" stroke="#ffcc00" />
                        <Line type="monotone" dataKey="פעילים" stroke="#b366ff" />  
                    </LineChart>
                </ResponsiveContainer>
            
                
            </div>
           
        )
    }
    
}

export default SummaryChart;