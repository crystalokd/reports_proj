from django.shortcuts import render
from  django.views.generic import ListView
from .models import Sales


# Create your views here.


def home_view(request):
    hello = 'hello world from the view'
    return render(request, 'sales/home.html', {'hello':hello})


class SaleListView(ListView):
    model = Sales
    template_name = 'sales/main.html'