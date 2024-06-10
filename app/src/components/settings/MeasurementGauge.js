import GaugeComponent from "react-gauge-component"

const MeasurementGauge = ({value}) => {


    return(
        <GaugeComponent
            //value={value != null ? value : 0}
            type="radial"
            value={3}
            style={{height:10}}
        />
    )
}
export default MeasurementGauge