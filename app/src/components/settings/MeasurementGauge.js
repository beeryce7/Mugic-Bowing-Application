import GaugeComponent from "react-gauge-component"

const MeasurementGauge = ({value, measurement}) => {

    if(measurement!="pitch"){
        return(
        <GaugeComponent
            //value={value != null ? value : 0}
            type="semicircle"
            value={value}
            arc={{colorArray:['#009EFF'], nbSubArcs:1}}
            style={{width:"50%"}}
            labels={{hide:true}}
            minValue={-180}
            maxValue={180}  
        />)
    }
    else
    {
        return(
        <GaugeComponent
            //value={value != null ? value : 0}
            type="semicircle"
            value={value}
            arc={{colorArray:['#009EFF'], nbSubArcs:1}}
            style={{width:"50%"}}
            labels={{hide:true}}
            minValue={0}
            maxValue={90}  
        />)
    }

    return <></>
}
export default MeasurementGauge