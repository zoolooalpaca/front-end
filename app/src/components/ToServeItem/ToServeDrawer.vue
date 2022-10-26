<template>
    <ToServeItem 
        v-for="(table,index) in tables" 
        :id="index"
        :table_id="table.table_id"
        :orders="table.orders"
        :key="index"
    >
    </ToServeItem>
</template>

<script>
import ToServeItem from './ToServeItem.vue';

export default{
    data(){
        return{
        tables:[
        {
            table_id: 1,
            orders: [
            {
              order: 'ข้าวไข่เจียว',
              amount: 2,
            },
            {
              order: 'กะเพราหมูไข่ดาว',
              amount: 1,
            },
            {
              order: 'กะเพราหมูดาว',
              amount: 1,
            },
            ]
        },
        {
            table_id: 2,
            orders:[
                {
                order: 'ไข่ดาว',
                  amount: 1,
                },
                {
                  order: 'กะเพราดาว',
                  amount: 1,
                },
                {
                  order: 'กะเพราหมูไข่',
                  amount: 1,
                },
            ],
        },
        ],
      };
    },
    components: {ToServeItem},
};
</script>