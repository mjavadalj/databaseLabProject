<template>
<div>
<v-btn class="ma-2" outlined color="success" @click="getusers">get users</v-btn>
<v-simple-table height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">user Id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userId">
          <td>{{ user.username }}</td>
          <td>{{ user.userid }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>


</div>

</template>

<script>
/* eslint-disable */
export default {
    data(){
        return{
            users:"",
            groups:"",
            pages:""
        }

        
    },
    methods:{
        getusers(){
this.axios
        .get(`http://localhost:3000/api/getuser`)
        .then((result)=> {
            this.users= result.data.resultt.rows;
            console.log(this.users)
        this.$swal.fire({
                  type: "success",
                  title: "موفق",
                  text: " userezafe shod"
                });
        })
        .catch((err) => {
        console.log(err);
        });

        },
        getgroups(){

        },
        getpages(){

        }
    }
}
</script>