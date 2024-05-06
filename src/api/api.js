/* eslint-disable */
import { getAction, deleteAction, putAction, postAction, httpAction } from '@/api/manage'
import Vue from 'vue'

const getProfessionList = (params)=>getAction('/dictProfession/getList',params);
const getsysInfoTree = (params)=>getAction('/sysInfoTree/getTreeInfo',params);

export {
    getProfessionList,
    getsysInfoTree
}