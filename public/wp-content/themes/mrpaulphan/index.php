<?php get_header(); ?>


<main>
  <?php
  /**
   * Query page-home content
   */
    while ( have_posts() ) : the_post(); ?>
        <div class="entry-content-page">
            <?php the_content(); ?>
        </div>
    <?php endwhile; wp_reset_query(); ?>


  <section class="projects">
  <?php
      /**
       * Query our the project posts
       */
      $args = array(
        'post_type' => 'projects'
      );
      $loop = new WP_Query( $args );
      while ( $loop->have_posts() ) : $loop->the_post();

  ?>
  <article class="project">
    <span class="project__hr"></span>
    <p class="project__date"><?php echo get_the_date('F Y'); ?></p>
    <h3 class="project__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
  </article>
  <!-- .project -->
  <?php endwhile; wp_reset_query(); ?>
  </section>

</main>
<?php get_footer(); ?>
