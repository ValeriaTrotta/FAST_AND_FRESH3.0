from .serializers import (ProductSerializer,
                          ClientSerializer,
                          MemberSerializer,
                          ZonaSerializer,
                          CitySerializer,
                          StateSerializer,
                          PaymentSerializer,
                          Product_TypeSerializer,
                          Type_Of_ProductSerializer,
                          BatchSerializer,
                          StoreSerializer,
                          DeliverySerializer,
                          PickUpSerializer,
                          BillSerializer,
                          BillDetailsSerializer,
                          CurrencySerializer,
                          ExchangeRateSerializer,
                          CashRegisterSerializer,
                          PaymentMethodSerializer,
                          EmployeeSerializer,
                          JobSerializer,
                          IVASerializer,
                          StoreBossSerializer,
                          CashRegisterBillsSerializer,
                          EmployeeStoreSerializer,
                          ProviderSerializer,
                          ProviderPhoneSerializer)
from fast_fresh.models import (Product,
                               Provider,
                               ProviderPhone,
                               EmployeeStore,
                               StoreBoss,
                               Client,
                               Member,
                               Zona,
                               City,
                               State,
                               Payment,
                               Product_Type,
                               Type_Of_Product,
                               Batch, Store,
                               Delivery,
                               PickUp, Bill,
                               BillDetails,
                               Currency,
                               ExchangeRate,
                               CashRegister,
                               CashRegisterBills,
                               PaymentMethod,
                               Employee,
                               Job,
                               IVA)
from django.http import HttpResponse
from django.db.models import Sum, Count
from django.views.generic import View
from rest_framework.filters import SearchFilter
from rest_framework import viewsets, permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render


# Importaciones de Tutu:


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializer


class BatchViewSet(viewsets.ModelViewSet):
    queryset = Batch.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BatchSerializer


class Type_Of_ProductViewSet(viewsets.ModelViewSet):
    queryset = Type_Of_Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = Type_Of_ProductSerializer


class Product_TypeViewSet(viewsets.ModelViewSet):
    queryset = Product_Type.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = Product_TypeSerializer


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ClientSerializer


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MemberSerializer


class ZonaViewSet(viewsets.ModelViewSet):
    queryset = Zona.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ZonaSerializer


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CitySerializer


class StateViewSet(viewsets.ModelViewSet):
    queryset = State.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StateSerializer


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StoreSerializer


class StoreBossViewSet(viewsets.ModelViewSet):
    queryset = StoreBoss.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StoreBossSerializer


class DeliveryViewSet(viewsets.ModelViewSet):
    queryset = Delivery.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DeliverySerializer


class PickUpViewSet(viewsets.ModelViewSet):
    queryset = PickUp.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PickUpSerializer


class BillViewSet(viewsets.ModelViewSet):
    queryset = Bill.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BillSerializer


class BillDetailsViewSet(viewsets.ModelViewSet):
    queryset = BillDetails.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BillDetailsSerializer


class CashRegisterViewSet(viewsets.ModelViewSet):
    queryset = CashRegister.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CashRegisterSerializer


class CashRegisterBillsViewSet(viewsets.ModelViewSet):
    queryset = CashRegisterBills.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CashRegisterBillsSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PaymentSerializer


class PaymentMethodViewSet(viewsets.ModelViewSet):
    queryset = PaymentMethod.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PaymentMethodSerializer


class CurrencyViewSet(viewsets.ModelViewSet):
    queryset = Currency.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CurrencySerializer


class ExchangeRateViewSet(viewsets.ModelViewSet):
    queryset = ExchangeRate.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ExchangeRateSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeSerializer


class EmployeeStoreViewSet(viewsets.ModelViewSet):
    queryset = EmployeeStore.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeStoreSerializer


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobSerializer


class IVAViewSet(viewsets.ModelViewSet):
    queryset = IVA.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = IVASerializer


class ProviderViewSet(viewsets.ModelViewSet):
    queryset = Provider.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProviderSerializer


class ProviderPhoneViewSet(viewsets.ModelViewSet):
    queryset = ProviderPhone.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProviderPhoneSerializer


def top_5_productos_mas_vendidos(request):

    # Un JSON se establece con {}

    arreglo = []
    cantidad = []

    query = Batch.objects.values('product_name__product_name').annotate(
        a=Sum('units_sold')).order_by('-a')[0:5]

    for x in query:
        arreglo.append(x['product_name__product_name'])
        cantidad.append(x['a'])

    b = []

    for x in range(len(arreglo)):
        c = {'producto': arreglo[x], 'cantidad': cantidad[x]}
        b.append(c)

    data = {
        'algo': b,
    }

    return JsonResponse(data)


# Top 5 productos menos vendidos (Analizando los productos vendidos de
# cada batch). Suma las unidades vendidas de los batchs con el mismo nombre


def top_5_productos_menos_vendidos(request):

    # Un JSON se establece con {}

    arreglo = []
    cantidad = []

    query = Batch.objects.values('product_name__product_name').annotate(
        a=Sum('units_sold')).order_by('a')[0:5]

    for x in query:
        arreglo.append(x['product_name__product_name'])
        cantidad.append(x['a'])

    b = []

    for x in range(len(arreglo)):
        c = {'producto': arreglo[x], 'cantidad': cantidad[x]}
        b.append(c)

    data = {
        'algo': b,
    }

    return JsonResponse(data)

# Top 5 productos más vendidos de miembros(Analizando los productos vendidos de
# cada batch). Suma las unidades vendidas de los batchs con el mismo nombre


def top_5_productos_mas_vendidos_miembros(request):

    # Un JSON se establece con {}

    arreglo = []
    cantidad = []

    query = Batch.objects.values('product_name__product_name').filter(
        product_name__is_special=1).annotate(
        a=Sum('units_sold')).order_by('-a')[0:5]

    for x in query:
        arreglo.append(x['product_name__product_name'])
        cantidad.append(x['a'])

    b = []

    for x in range(len(arreglo)):
        c = {'producto': arreglo[x], 'cantidad': cantidad[x]}
        b.append(c)

    data = {
        'algo': b,
    }

    return JsonResponse(data)


# Lista completa de productos que dan perdida de mayor a menor

def lista_productos_mas_perdidas(request):

    # Un JSON se establece con {}

    arreglo = []
    cantidad = []

    query = Batch.objects.values('product_name__product_name').annotate(
        a=Sum('units_lost')).order_by('-a')

    for x in query:
        arreglo.append(x['product_name__product_name'])
        cantidad.append(x['a'])

    b = []

    for x in range(len(arreglo)):
        c = {'producto': arreglo[x], 'cantidad': cantidad[x]}
        b.append(c)

    data = {
        'algo': b,
    }

    return JsonResponse(data)


# Sucursal con más ventas

def sucursal_mas_ventas(request):

    # Un JSON se establece con {}

    arreglo = []
    cantidad = []

    query = Batch.objects.values('store__store_name').annotate(
        a=Sum('units_sold')).order_by('-a')[0:1]

    for x in query:
        arreglo.append(x['store__store_name'])
        cantidad.append(x['a'])

    b = []

    for x in range(len(arreglo)):
        c = {'Sucursal': arreglo[x], 'Cantidad': cantidad[x]}
        b.append(c)

    data = {
        'algo': b,
    }

    return JsonResponse(data)


# Productos Especiales

def productos_especiales(request):

    # Un JSON se establece con {}

    arreglo = []

    query = Product.objects.values('product_name').filter(is_special=1)

    for x in query:
        arreglo.append(x['product_name'])

    b = []

    for x in range(len(arreglo)):
        c = {'Producto Especial': arreglo[x]}
        b.append(c)

    data = {
        'algo': b,
    }

    return JsonResponse(data)


# Productos y cantidad de vendidos de un día
def ventas_diarias(request, dia, mes, ano):

    # Un JSON se establece con {}

    arreglo = []
    cantidad = []

    query = BillDetails.objects.values(
        'product_batch_id__product_name__product_name').annotate(
        a=Sum('product_quantity')).filter(
            bill_id__bill_date__year=ano,
            bill_id__bill_date__month=mes,
            bill_id__bill_date__day=dia).order_by('-a')

    for x in query:
        arreglo.append(x['product_batch_id__product_name__product_name'])
        cantidad.append(x['a'])

    b = []

    for x in range(len(arreglo)):
        c = {'Producto': arreglo[x], 'Cantidad': cantidad[x]}
        b.append(c)

    data = {
        'algo': b,
    }

    return JsonResponse(data)
