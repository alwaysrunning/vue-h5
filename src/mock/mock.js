import Mock from 'mockjs'
Mock.mock('/news', 'get', {
    'list|1-10':[{
        'id|+1':1
    }]
})