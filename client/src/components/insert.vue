<template>
<div>
<div class="bod">

<div class="margin">
<div class="form">
  <v-form>
    <v-container>
      <v-row>
      <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="userId"
            :counter="15"
            label="User Id"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="userName"
            :counter="15"
            label="User Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="userPassword"
            :counter="30"
            label="Password"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
<div class="button">
    <div class="text-center">
        <v-btn class="ma-2" outlined color="indigo" @click="insertUser">Insert User</v-btn>
    </div>
</div>

  </v-form>
  </div>
  </div>







<div class="margin">
<div class="form">
  <v-form>
    <v-container>
      <v-row>
      <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="groupId"
            :counter="30"
            label="Group Id"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="groupName"
            :counter="30"
            label="Group Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="description"
            label="description"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
<div class="button">
    <div class="text-center">
        <v-btn class="ma-2" outlined color="indigo" @click="insertgroup">Insert Group</v-btn>
    </div>
</div>

  </v-form>
  </div>

  
  </div>











<div class="margin">
  
<div class="form">
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="pageId"
            :counter="10"
            label="page Id"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="pageName"
            :counter="10"
            label="page Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="pageAdmin"
            :counter="10"
            label="Page Admin"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
<div class="button">
    <div class="text-center">
        <v-btn class="ma-2" outlined color="success" @click="insertpage">Insert Page</v-btn>
    </div>
</div>

  </v-form>


  </div>
  


  </div>
</div>






  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'insertUser',
  data() {
    return {
      userId:"",
    userName:"",
    userPassword:"",
    email:"",
    groupId:"",
    groupName:"",
    description:"",
    pageId:"",
    pageName:"",
    pageAdmin:""
    };
  },
  methods: {
    insertUser(){

      this.axios
        .post(`http://localhost:3000/api/insertuser`, {
          userId:this.userId,
          username: this.userName,
          userPassword: this.userPassword,
          email: this.email
        })
        .then(()=> {
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
    insertgroup(){

      this.axios
        .post(`http://localhost:3000/api/insertgroup`, {
          groupId:this.groupId,
          groupName: this.groupName,
          description: this.description
        })
        .then(()=> {
        this.$swal.fire({
                  type: "success",
                  title: "موفق",
                  text: " group ezafe shod!"
                });
        })
        .catch((err) => {
        console.log(err);
        });

    },
    insertpage(){

      this.axios
        .post(`http://localhost:3000/api/insertpage`, {
          pageId:this.pageId,
          pageName: this.userName,
          admin: this.pageAdmin,
          email: this.email
        })
        .then(()=> {
        this.$swal.fire({
                  type: "success",
                  title: "موفق",
                  text: " page ezafe shod!"
                });
        })
        .catch((err) => {
        console.log(err);
        });

    }
  },
}
</script>
<style>

html { height: 100%; }
body {
    background-color:rgb(242, 242, 242);
    height: 100%;
}
.form{
    margin: auto;
  width: 50%;
  border: 3px solid teal;
  padding: 10px;
}
.button{
    
    margin: auto;
  width: 25%;
}
.bod{
  height: 100%;
}
.margin{
  margin:3.5%;
}
</style>