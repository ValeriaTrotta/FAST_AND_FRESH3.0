from rest_framework import viewsets, permissions
from fast_fresh.models import Product, Provider, ProviderPhone, EmployeeStore, StoreBoss, Client, Member, Zona, City, State, Payment, Product_Type, Type_Of_Product, Batch, Store, Delivery, PickUp, Bill, BillDetails, Currency, ExchangeRate, CashRegister, CashRegisterBills, PaymentMethod, Employee, Job, IVA
from .serializers import ProductSerializer, ClientSerializer, MemberSerializer, ZonaSerializer, CitySerializer, StateSerializer, PaymentSerializer, Product_TypeSerializer, Type_Of_ProductSerializer, BatchSerializer, StoreSerializer, DeliverySerializer, PickUpSerializer, BillSerializer, BillDetailsSerializer, CurrencySerializer, ExchangeRateSerializer, CashRegisterSerializer,  PaymentMethodSerializer, EmployeeSerializer, JobSerializer, IVASerializer, StoreBossSerializer, CashRegisterBillsSerializer, EmployeeStoreSerializer, ProviderSerializer, ProviderPhoneSerializer

# Importaciones de Tutu:
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import viewsets
from rest_framework.filters import SearchFilter
from django.views.generic import View
from django.db.models import Sum, Count

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
    serializer_class = Zona


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

#   QUERIES ----------------------------------------------------------------------

def query_set_1(request,*args, **kwargs):
    query = Product.objects.filter(is_active=0)
    return HttpResponse(query)

def query_set_2(request,*args, **kwargs):
    query = Batch.objects.values('product_name__product_name', 'units_sold').order_by('-units_sold')[0:1] #Para referenciar a otra tabla se pone "__"
    return HttpResponse(query)                                                                            #Ej: product_name__product_name

def query_set_3(request,*args, **kwargs):
    query = Batch.objects.values('product_name__product_name', 'units_sold').filter(product_name__product_name__startswith="Almendras")
    return HttpResponse(query)
