from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import viewsets, permissions
from rest_framework.filters import SearchFilter
from django.views.generic import View
from django.db.models import Sum, Count
from django.http import HttpResponse

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

def get_queryset(request, *args, **kwargs):
    enero = Bill.objects.filter(bill_date__month='01').count()
    febrero = Bill.objects.filter(bill_date__month='02').count()
    marzo = Bill.objects.filter(bill_date__month='03').count()
    abril = Bill.objects.filter(bill_date__month='04').count()
    mayo = Bill.objects.filter(bill_date__month='05').count()
    junio = Bill.objects.filter(bill_date__month='06').count()
    julio = Bill.objects.filter(bill_date__month='07').count()
    agosto = Bill.objects.filter(bill_date__month='08').count()
    septiembre = Bill.objects.filter(bill_date__month='09').count()
    octubre = Bill.objects.filter(bill_date__month='10').count()
    noviembre = Bill.objects.filter(bill_date__month='11').count()
    diciembre = Bill.objects.filter(bill_date__month='12').count()
    meses = [enero, febrero, marzo, abril, mayo, junio, julio,
             agosto, septiembre, octubre, noviembre, diciembre]

    mayor = meses[0]
    for x in range(0, 10):
        y = x+1
        if mayor > meses[y]:
            mayor = mayor
        elif meses[y] > meses[x]:
            mayor = meses[y]
        # else:
        #     mayor = meses[x,y]
    meses[z] = mayor
    x = x+1

    # if mess == 3:
    #     mayorrr = 'marzo'
    # else:
    #     mayorrr = 'no marzo'

    return HttpResponse(str(meses[z])+': '+str(mayor))
