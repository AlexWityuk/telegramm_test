<?php

use models\Category;
use models\Product;

class SiteController {

    public function actionIndex(){
        require_once(ROOT . '/views/index.php');
        return true;
    }
    public function actionRaceprice(){     
        
        $_SESSION['min_price'] = $_POST['pricemin'];
        
        $_SESSION['max_price'] = $_POST['pricemax'];

    }
}

