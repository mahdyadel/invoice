<?php

namespace App;

use App\InvoiceDetails;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $guarded = []; 

    public function details(){
        return $this->hasMany(InvoiceDetails::class , 'invoice_id' , 'id');
    }

    public function discountResult()
    {
        return $this->discount_type == 'fixed' ? $this->discount_value : $this->discount_value.'%';
    }
}
