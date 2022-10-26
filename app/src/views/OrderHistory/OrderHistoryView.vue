<template>
    <div class="relative">
        <div>
            <TopAppBar label="ประวัติ"></TopAppBar>
        </div>
        <HistoryItem></HistoryItem>
        <HistoryDrawer></HistoryDrawer>
        <div class="fixed left-0 bottom-0 w-full p-4">
            <FloatingHistoryOrder class="mx-10"></FloatingHistoryOrder>
        </div>
        <div class="text-center">
            <button class="
            button1
            
            m-10
            ">
                + สั่ง
            </button>
        </div>
    </div>
</template>

<script>
import FloatingHistoryOrder from '../../components/FloatingHistoryOrder.vue';
import FloatingOrder from '../../components/FloatingOrder.vue';
import HistoryDrawer from '../../components/HistoryItem/HistoryDrawer.vue';
import HistoryItem from '../../components/HistoryItem/HistoryItem.vue';
import TopAppBar from '../../components/TopAppBar/TopAppBar.vue';

export default{
    components:
    {
    TopAppBar,
    HistoryItem,
    HistoryDrawer,
    FloatingOrder,
    FloatingHistoryOrder
}
};

</script>