<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Apply for your dog
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <center>
          <img :src="this.logo" style="width:150px; height:150px;"/>
          </center>
         <form>
        
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
         
     
          <input type="email" placeholder="Email Address"/>
     
        <input type="text" placeholder="Phone Number"/>
        <textarea  rows="4" cols="48">
        </textarea>
         </form>
        </slot>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
          <p>Copyrights &copy. Black Mountain K9 Search and Rescue</p>
        </slot>
        <button
          type="button"
          class="btn-green"
          @click="close"
        >
          Close Modal
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
 props:['logo','message'],
 methods: {
      close() {
        this.$emit('close');
        

      },
    },
}
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:600;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    z-index:500;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    background-color: #f6b243;
    color: black;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    height:500px;
    width:400px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: black;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #f6b243;
    padding:5px;
    border: 1px solid black;
    border-radius: 2px;
  }
  input{
    height:40px;
    width:90%;
    margin:5px;
    position: relative;
    left:10px;
  }
  textarea{
      height:80px;
    width:90%;
    margin:5px;
    position: relative;
    left:10px;
  }
</style>