<template>
    <h1>Users</h1>

    <!-- TABLE -->
    <el-table :data="userStore.users" stripe border highlight-current-row class="mt-4" style="width: 100%;"
        empty-text="No result. Try with different search parameters.">
        <el-table-column prop="id" label="ID" width="100">
            <template v-slot="scope">

                <a :href="`users/${scope.row.id}`">
                    {{ scope.row.id }}
                </a>

            </template>

        </el-table-column>
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="phone" label="Phone" />
        <el-table-column prop="company.name" label="Company" />

        <el-table-column>
            <template v-slot="scope">
                <el-button type="primary" size="mini" @click="deleteUser(scope.row.id)">
                    Delete
                </el-button>
            </template>
        </el-table-column>
    </el-table>


    <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="Activity name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Activity zone">
            <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
            <el-col :span="11">
                <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
            </el-col>
            <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
                <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
            </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery">
            <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
                <el-checkbox value="Online activities" name="type">
                    Online activities
                </el-checkbox>
                <el-checkbox value="Promotion activities" name="type">
                    Promotion activities
                </el-checkbox>
                <el-checkbox value="Offline activities" name="type">
                    Offline activities
                </el-checkbox>
                <el-checkbox value="Simple brand exposure" name="type">
                    Simple brand exposure
                </el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
            <el-radio-group v-model="form.resource">
                <el-radio value="Sponsor">Sponsor</el-radio>
                <el-radio value="Venue">Venue</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
            <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>

</template>

<script
    setup
    lang="ts"
>
import { useUserStore } from "@/projects/users/store/UserStore.ts";

//Get the users from the store.
const userStore = useUserStore();

onMounted(async () => {
    // console.log("onMounted.");
    userStore.getUsers();
});

const deleteUser = (id: number) => {
    userStore.deleteUser(id);
};

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

</script>

<style scoped></style>
