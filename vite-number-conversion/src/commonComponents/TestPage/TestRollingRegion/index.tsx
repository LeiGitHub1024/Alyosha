import React from 'react';
import RollingRegion from '../../RollingRegion';
import style from './index.module.less'
const TestRollingRegion = (props:{})=>{

const {} = props
const listInfo:any[] = [
  {
    label:'地域',
    value:'globalRegion?.Region',
  },{
    label:'可用区',
    value: '<div>{masterZone }<br/> {slaveZone}<br/> {clusterMasterZoneId}</div>'  ,
  },{
    label:'名称',
    value:'name',
  },{
    label:'IP版本',
    value:'addressIpVersion',
  },{
    label:'实例规格',
    value:'spec',
  },{
    label:'计费类型',
    value:'billingType',
  },{
    label:'购买时长',
    value:'preBuyMonth',
  },{
    label:'自动续费',
    value: '<div>{billRenewa>',
  },
  {
    label:'网络配置',
    value:'type',
  },{
    label:'公网ip',
    value:' <div>{lineType}<br/> {eipBillingType} <br/>{bandwidth}</div>',
  }
]
    return(<>
      <RollingRegion
        title='配置详情'
        partOne={
          <div>
            {listInfo
              .filter(item => !!item)
              .map(item => (
                <div className={style.row} key={item?.label}>
                  <div className={style.label}>{item?.label}</div>
                  <div className={style.value}>{item?.value} </div>
                </div>
              ))}
          </div>
        }
        partTwo={<div>2</div>}
      />
    </>)
}
export default TestRollingRegion;