<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Http\Request;
use Zend\Http\Response;
use Zend\Http\Client;
use Zend\Mvc\Controller\AbstractRestfulController;

class MoviesController extends AbstractRestfulController
{
    public function indexAction () {
        $name = $this->params()->fromQuery("name");
        $page = $this->params()->fromQuery("page");
        if ($name) {
            $request = new Request();
            $request->setUri("https://api.themoviedb.org/3/search/movie?api_key=1f54bd990f1cdfb230adb312546d765d&query={$name}&page={$page}");
            $request->getHeaders()->addHeaders([
                'Content-Type' => 'application/json',
                'Content-Type' => 'charset=utf-8'
            ]);
            
            $client = new Client();
            $result = $client->send($request);
            
            $response = new Response();
            $response->setStatusCode(200);
            $response->getHeaders()->addHeaders(array('Content-type' => 'application/json'));
            $response->setContent($result->getBody());
            
            return $response;
        } else {
            echo "Nothing found";
        }
    }

    public function getGenresAction () {
        if ($name) {
            $request = new Request();
            $request->setUri("https://api.themoviedb.org/3/genre/movie/list?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US");
            $request->getHeaders()->addHeaders([
                'Content-Type' => 'application/json',
                'Content-Type' => 'charset=utf-8'
            ]);
            
            $client = new Client();
            $result = $client->send($request);
            
            $response = new Response();
            $response->setStatusCode(200);
            $response->getHeaders()->addHeaders(array('Content-type' => 'application/json'));
            $response->setContent($result->getBody());
            
            return $response;
        } else {
            echo "Nothing found";
        }
    }

    public function getImageAction () {
        $img = $this->params()->fromQuery("img");
        if ($img) {
            $request = new Request();
            $request->setUri("http://image.tmdb.org/t/p/w500//{$img}");
            $request->getHeaders()->addHeaders([
                'Content-Type' => 'image/jpeg',
            ]);
            
            $client = new Client();
            $result = $client->send($request);
            
            $response = new Response();
            $response->setStatusCode(200);
            $response->getHeaders()
                ->addHeaderLine('Content-Type', 'image/png');
            $response->setContent($result->getBody());

            return $response;
        } else {
            echo "No image found";
        }
    }
}
