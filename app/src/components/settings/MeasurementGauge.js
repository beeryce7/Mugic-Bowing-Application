import GaugeComponent from "react-gauge-component"

const MeasurementGauge = ({value}) => {


    return(
        <GaugeComponent
            //value={value != null ? value : 0}
            type="radial"
            value={0}
            style={{width:10}}
            
        />
    )
}
export default MeasurementGauge