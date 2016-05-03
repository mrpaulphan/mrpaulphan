<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(

    '*' => array(
        'tablePrefix' => 'craft',
    ),
    '.dev' => array(
        'server' => getenv('DATABASE_HOST'),
        'user' => getenv('DATABASE_USER'),
        'password' => getenv('DATABASE_PASS'),
        'database' => getenv('DATABASE_NAME'),
    ),
    '.com' => array(

    ),
);
