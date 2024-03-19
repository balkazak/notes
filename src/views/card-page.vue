<template>
   <div class="card-page">
     <v-row class="justify-center justify-md-space-between mb-16">
       <h2>Мои заметки</h2>
       <v-dialog
           v-model="dialog"
           persistent
           max-width="600px"
       >
         <template v-slot:activator="{ on, attrs }">
           <v-btn
               v-bind="attrs"
               v-on="on"
               tile
               color="blue "
               class="btn mt-5 mt-md-0"
           >
             <v-icon left>
               mdi-pencil
             </v-icon>
              Новая заметка
           </v-btn>
         </template>
         <v-card>
           <v-card-title>
             <span class="text-h5">Новая заметка</span>
           </v-card-title>
           <v-card-text>
               <v-row>
                 <v-col cols="12">
                   <v-text-field
                       label="Название:"
                       required
                       v-model="title"
                   ></v-text-field>
                 </v-col>
                 <v-col cols="12">
                   <v-text-field
                       label="Описание:"
                       required
                       v-model="description"
                   ></v-text-field>
                 </v-col>
               </v-row>
           </v-card-text>
           <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn
                 color="blue darken-1"
                 text
                 @click="closeModal"
             >
               Закрыть
             </v-btn>
             <v-btn
                 color="blue darken-1"
                 text
                 @click="addOrder"
             >
               Сохранить
             </v-btn>
           </v-card-actions>
         </v-card>
       </v-dialog>
     </v-row>
     <v-row  style="gap: 30px">
       <template v-for="(card, index) in orders">
         <v-card
             class="mx-auto"
             max-width="400"
         >
           <v-img
               class="align-end text-white"
               height="200"
               src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
               cover
           >
             <v-card-title>{{ card.title }}</v-card-title>
           </v-img>

           <v-card-subtitle class="pt-4 text-left">
             {{ formatDate(card.date) }}
           </v-card-subtitle>

           <v-card-text class="text-left">
             <div>{{ card.desc }}</div>
           </v-card-text>

           <v-card-actions>
             <v-btn color="orange" @click="deleteItem(index)">
               Удалить
             </v-btn>
           </v-card-actions>
         </v-card>
       </template>
     </v-row>
   </div>
</template>

<script>
import { mapState } from "vuex";
import {orderPageModule} from "@/store/orders-store";
export default {
  components: {

  },
  data: () => ({
    date: new Date(),
    dialog: false,
    description: '',
    title: '',
  }),
  computed: {
    ...mapState({
      newOrder: (state) => state.orderPageModule.newOrder,
      orders: (state) => state.orderPageModule.orders,
    }),
  },
  mounted() {
    const orders = localStorage.getItem('orders');
    if (orders) this.$store.commit('orderPageModule/setFromStorage', JSON.parse(orders))
  },
  methods: {
    closeModal() {
      this.dialog = false;
      this.title = '';
      this.description = '';
    },
    addOrder() {
      this.$store.commit('orderPageModule/setOrder', {
        title: this.title,
        desc: this.description,
        date: new Date(),
      })
      this.dialog = false;
    },
    formatDate(date) {
      date = new Date(date)
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    },
    deleteItem(index) {
      let question = confirm("Вы уверены что хотите удалить заметку?");
      if (!question) return;
      this.$store.commit('orderPageModule/deleteItem', index);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('orders', JSON.stringify(this.orders));
    }
  }
};
</script>


<style scoped>
  .card-page {
    padding: 100px 0;
  }
  .card-title {
    color: white;
  }
  .v-application .primary {
    background-color: red!important;
  }
  .btn {
    color: white!important;
  }
  @media (max-width: 800px) {
    .card-page {
      padding: 100px 50px;
    }
    .text {
      font-size: 10px;
    }
  }
</style>