<template>
  <div>
    <!-- login -->
    <form v-if="!isLoggedIn" @submit.prevent="submitLogin">
      <label>Nama</label><br />
      <input type="text" v-model="nama" /><br /><br />

      <label>Email</label><br />
      <input type="email" v-model="email" /><br /><br />

      <label>Asal Sekolah</label><br />
      <input type="text" v-model="asal_sekolah" /><br /><br />

      <button type="submit">Login</button>
    </form>

    <!-- info habis login -->
    <div v-if="isLoggedIn">
      <p>Login berhasil untuk nama : {{ loggedInUser.nama }}</p>
      <p>Login berhasil untuk email : {{ loggedInUser.email }}</p>
      <p>Status pendaftaran : {{ loggedInUser.status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      nama: "",
      asal_sekolah: "",
      isLoggedIn: false,
      loggedInUser: null,
      registrations: [],
    };
  },
  methods: {
    async GetData() {
      try {
        const req = await fetch("http://localhost:3001/api/registrasi");
        const resdata = await req.json();
        this.registrations = resdata.docs;
        console.log(this.registrations);
      } catch (err) {
        console.log(err);
      }
    },
    async submitLogin() {
      try {
        const matchingUser = this.registrations.find(
          (user) =>
            user.nama === this.nama &&
            user.email === this.email &&
            user.asal_sekolah === this.asal_sekolah
        );

        if (matchingUser) {
          this.isLoggedIn = true;
          this.loggedInUser = matchingUser;
          this.nama = "";
          this.email = "";
          this.asal_sekolah = "";
        } else {
          window.alert("Login gagal. Pengguna tidak ditemukan.");
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    this.GetData();
  },
};
</script>

<style></style>
