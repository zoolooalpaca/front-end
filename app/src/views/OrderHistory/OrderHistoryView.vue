<template>
    <div class="relative">
        <div>
            <TopAppBar label="ประวัติ"></TopAppBar>
        </div>
        <div class="py-8">
            <HistoryItem></HistoryItem>
            <HistoryDrawer></HistoryDrawer>
        </div>
        <div class="fixed left-0 bottom-0 w-full p-4">
            <FloatingHistoryOrder class="mx-10"></FloatingHistoryOrder>
        </div>
    </div>
</template>

<script>
import FloatingHistoryOrder from '../../components/FloatingHistoryOrder.vue';
import HistoryDrawer from '../../components/HistoryItem/HistoryDrawer.vue';
import HistoryItem from '../../components/HistoryItem/HistoryItem.vue';
import TopAppBar from '../../components/TopAppBar/TopAppBar.vue';

export default{
    components:
    {
    TopAppBar,
    HistoryItem,
    HistoryDrawer,
    FloatingHistoryOrder
}
};

</script>