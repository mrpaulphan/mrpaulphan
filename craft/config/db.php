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
        'server' => 'localhost',
        'user' => 'root',
        'password' => 'root',
        'database' => 'mrpaulphan_craft',
    ),
    '.com' => array(
        'server' => 'localhost',
        'user' => 'drexelba_user',
        'password' => 'u5PTqUUZwvGl',
        'database' => 'drexelba_db',
    ),
);
