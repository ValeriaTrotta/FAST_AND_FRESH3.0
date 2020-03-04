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


# class Query(viewsets.ModelViewSet):
#     serializer_class = MemberSerializer
#     filter_backends = [SearchFilter]
#     search_fields = ['member_points']

#     def get_queryset(request, *args, **kwargs):
#         queryset = Member.objects.all()
#         return queryset

#     def get_data(request):

#         a = []
#         b = []

#         c = Member.objects.values('member_email').anotate(
#             d=Sum('member_points')).order_by('d')[:2]

#         for x in c:
#             a.append(x['member_email'])
#             b.append(x['d'])

#         e = []

#         for x in range(len(a)):
#             print(x)
#             f = {'id': x+1, 'email': a[x], 'cant': b[x]}
#             e.append(f)
#             print(e)

#         data = {
#             'thing': e
#         }

#         return JsonResponse(data)

# class Query(viewsets.ModelViewSet):

# def get_queryset(request, *args, **kwargs):
#     top_members = Member.objects.all().order_by(
#         '-member_points')[:3]
#     queryset1 = top_members[0].client.client_name
#     queryset2 = top_members[1].client.client_name
#     queryset3 = top_members[2].client.client_name
#     return HttpResponse(queryset1+' '+queryset2+' '+queryset3)

# def get_queryset(request, *args, **kwargs):
#     enero = Bill.objects.filter(bill_date__month='01').count()
#     febrero = Bill.objects.filter(bill_date__month='02').count()
#     marzo = Bill.objects.filter(bill_date__month='03').count()
#     abril = Bill.objects.filter(bill_date__month='04').count()
#     mayo = Bill.objects.filter(bill_date__month='05').count()
#     junio = Bill.objects.filter(bill_date__month='06').count()
#     julio = Bill.objects.filter(bill_date__month='07').count()
#     agosto = Bill.objects.filter(bill_date__month='08').count()
#     septiembre = Bill.objects.filter(bill_date__month='09').count()
#     octubre = Bill.objects.filter(bill_date__month='10').count()
#     noviembre = Bill.objects.filter(bill_date__month='11').count()
#     diciembre = Bill.objects.filter(bill_date__month='12').count()
#     meses = [enero, febrero, marzo, abril, mayo, junio, julio,
#              agosto, septiembre, octubre, noviembre, diciembre]

#     mayor = meses[0]
#     for x in range(0, 10):
#         y = x+1
#         if mayor > meses[y]:
#             mayor = mayor
#         elif meses[y] > meses[x]:
#             mayor = meses[y]
#         # else:
#         #     mayor = meses[x,y]
#     meses[z] = mayor
#     x = x+1

#     # if mess == 3:
#     #     mayorrr = 'marzo'
#     # else:
#     #     mayorrr = 'no marzo'

#     return HttpResponse(str(meses[z])+': '+str(mayor))


# QUERIES ------------------------------------------------------------------
# -----------------------------------------------------------


def query_set_1(request, *args, **kwargs):
    query = Product.objects.filter(is_active=0)
    return HttpResponse(query)


# def query_set_2(request, *args, **kwargs):
#     query = Batch.objects.values('product_name__product_name',
#                                  'units_sold').order_by('-units_sold')[0:1]
#     # Para referenciar a otra tabla se pone "__"
#     return HttpResponse(query)  # Ej: product_name__product_name


# Top 5 productos más vendidos (Analizando los productos vendidos de
# cada batch). Suma las unidades vendidas de los batchs con el mismo nombre
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


def dinero_caja_dia(request, dia, mes, ano):

    # Un JSON se establece con {}

    arreglo = []
    cantidad = []

    query = CashRegisterBills.objects.values(
        'cash_register__employee_id__employee_name').annotate(
        a=Sum('bill__bill_sub_total')).filter(
            bill_id__bill_date__year=ano,
            bill_id__bill_date__month=mes,
            bill_id__bill_date__day=dia).order_by('-a')

    for x in query:
        arreglo.append(x['cash_register__employee_id__employee_name'])
        cantidad.append(x['a'])

    b = []

    for x in range(len(arreglo)):
        c = {'Cajera/o': arreglo[x], 'Cobro': cantidad[x]}
        b.append(c)

    data = {
        'algo': b,
    }

    return JsonResponse(data)


def dinero_intervalo_dias(request, dia1, mes1, ano1, dia2, mes2, ano2):

    arreglo = []
    cantidad = []

    query = BillDetails.objects.values(
        'bill_id__bill_date').annotate(
        a=Sum('bill_id__bill_sub_total')).filter(
            bill_id__bill_date__year__gte=ano1,
            bill_id__bill_date__month__gte=mes1,
            bill_id__bill_date__day__gte=dia1,
            bill_id__bill_date__year__lte=ano2,
            bill_id__bill_date__month__lte=mes2,
            bill_id__bill_date__day__lte=dia2).order_by('-a')

    for x in query:
        arreglo.append(x['bill_id__bill_date'])
        cantidad.append(x['a'])

    b = []

    for x in range(len(arreglo)):
        c = {'Fecha': arreglo[x], 'Ventas Totales Día': cantidad[x]}
        b.append(c)

    data = {
        'algo': b,
    }

    return JsonResponse(data)


# def dinero_caja_dia(request, dia, mes, ano):

#     cantidad = []

#     mes_cumple = Member.objects.values('member_birth_date__month')
#     dia_cumple = Member.objects.values('member_birth_date__day')
#     ano_cumple = Member.objects.values('member_birth_date__year')

#     if (mes_cumple < mes and dia_cumple < dia):
#         edad = ano - ano_cumple
#     else:
#         edad = ano - ano_cumple - 1

#     for x in Member(len):
#         if (edad < 10):
#             menores_10 = menores_10 + 1
#         elif (edad > 9 and edad < 20):
#             entre_10_20 = entre_10_20 + 1
#         elif (edad > 19 and edad < 30):
#             entre_20_30 = entre_10_30 + 1
#         elif (edad > 29 and edad < 40):
#             entre_30_40 = entre_30_40 + 1
#         elif (edad > 39 and edad < 50):
#             entre_40_50 = entre_40_50 + 1
#         elif (edad > 49 and edad < 60):
#             entre_50_60 = entre_50_60 + 1
#         elif (edad > 59 and edad < 70):
#             entre_60_70 = entre_60_70 + 1
#         elif (edad >= 70):
#             mayores_de_70 = mayores_de_70 + 1

#     query = Member.objects.values().annotate(
#         a=Sum('member_birth_date')).filter(
#             bill_id__bill_date__year=ano,
#             bill_id__bill_date__month=mes,
#             bill_id__bill_date__day=dia).order_by('-a')

#     for x in query:
#         arreglo.append(x['cash_register__employee_id__employee_name'])
#         cantidad.append(x['a'])

#     b = []

#     for x in range(len(arreglo)):
#         c = {'Cajera/o': arreglo[x], 'Cobro': cantidad[x]}
#         b.append(c)

#     data = {
#         'algo': b,
#     }

#     return JsonResponse(data)
