
import {http} from './http'

//设备列表
export const reqGaos = (data) => http({
    url : `/gao/list`,
    data
})