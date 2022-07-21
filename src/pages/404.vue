<template>
  <Layout pageName="404" class="bg-background-secondary m-0 p-0">
    <div
      class="
        bg-gradient-to-r
        light:bg-background-secondary
        dark:bg-background-secondary
      "
      :style="background"
      id="wrapper"
    >
      <div class="py-16 flex items-center justify-center">
        <div
          class="
            bg-white
            dark:bg-gray-700
            shadow
            overflow-hidden
            sm:rounded-lg
            pb-8
          "
        >
          <div
            class="
              border-t border-gray-200
              dark:border-gray-600
              text-center
              pt-8
            "
          >
            <h1 class="text-9xl font-bold">404</h1>
            <h1 class="text-6xl font-medium py-8">Page not found!</h1>
            <p class="text-2xl pb-8 px-12 font-medium">
              Oops! The page you are looking for does not exist.
            </p>
            <g-link
              to="/"
              class="
                bg-primary-500
                hover:bg-primary-600
                text-white
                font-semibold
                hover:text-white
                py-3
                px-25
                rounded-md
                mr-6
              "
            >
              Go home
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
