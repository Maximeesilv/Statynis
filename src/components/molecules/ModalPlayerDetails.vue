<template>
    <div class="styns__m-modal-player-details card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              :src="playerDetails.picture"
              alt="Placeholder image"
              class="card-img"
            />
          </figure>
        </div>
        <div class="media-content">
          <span class="title is-6">
            First name: {{ playerDetails.firstname }}
          </span>
          <br>
          <span class="title is-6">
            Last name: {{ playerDetails.lastname }}
          </span>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'ModalPlayerDetails',
    props: {
        playerDetails: {
            type: Object
        }
    }
}
</script>