<script lang="ts">
      import { createEventDispatcher } from 'svelte';
      const dispatch = createEventDispatcher();
</script>

<div style="width: 100%;">
<a href="#" on:click={() => dispatch('onClick')} class="google-btn">
    <img src="https://developers-dot-devsite-v2-prod.appspot.com/identity/sign-in/g-normal.png" alt="Google Logo" width="20" height="20">
    Acceder con Google
  </a>
</div>
  <style>
    .google-btn {
      display: inline-flex;
      align-items: center;
      background-color: #4285F4;
      color: #ffffff;
      border-radius: 4px;
      padding: 10px 16px;
      font-size: 14px;
      text-decoration: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }

    .google-btn img {
      margin-right: 10px;
    }

    .google-btn:hover {
      background-color: #3277D8;
    }
  </style>