<template>
    <div>
        <e-button>123</e-button>
        <hr />

        <e-icon></e-icon>
        <hr />

        <div class="flex-row">
            <e-battery :batteryLevel="10"></e-battery>
            <e-battery :batteryLevel="30"></e-battery>
            <e-battery :batteryLevel="50"></e-battery>
            <e-battery :batteryLevel="70"></e-battery>
            <e-battery :batteryLevel="90"></e-battery>
            <e-battery :batteryLevel="100"></e-battery>
        </div>
        <hr />

        <div class="flex-row">
            <e-temperature :temperature="12"></e-temperature>
            <e-temperature :temperature="20"></e-temperature>
            <e-temperature :temperature="30"></e-temperature>
        </div>
        <hr />

        <e-humidity :humidity="30"></e-humidity>
        <hr />


        <div class="flex-row">
            <e-formaldehyde :formaldehyde="20"></e-formaldehyde>
            <e-formaldehyde :formaldehyde="2600"></e-formaldehyde>
        </div>
        <hr />

        <div style="width:330px;background: #27263f;">
            <e-indicator name="PM2.5" value="100"></e-indicator>
        </div>
        <hr/>
        
        <e-controller></e-controller>
        <hr/>

        <e-wave percent="50"></e-wave>
        <hr/>

        <e-filter max="150" filterUsage="120"></e-filter>
    </div>
</template>
<style>
.flex-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}
</style>