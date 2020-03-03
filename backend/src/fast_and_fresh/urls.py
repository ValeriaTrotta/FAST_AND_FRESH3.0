
from django.contrib import admin
from django.urls import path, include
from fast_fresh.api.views import (top_5_productos_mas_vendidos,
                                  top_5_productos_menos_vendidos,
                                  top_5_productos_mas_vendidos_miembros,
                                  lista_productos_mas_perdidas,
                                  sucursal_mas_ventas,
                                  productos_especiales,
                                  ventas_diarias)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('fast_fresh.api.urls')),
    path('top_5_productos_mas_vendidos/', top_5_productos_mas_vendidos),
    path('top_5_productos_menos_vendidos/', top_5_productos_menos_vendidos),
    path('top_5_productos_mas_vendidos_miembros/',
         top_5_productos_mas_vendidos_miembros),
    path('lista_productos_mas_perdidas/', lista_productos_mas_perdidas),
    path('sucursal_mas_ventas/', sucursal_mas_ventas),
    path('productos_especiales/', productos_especiales),
    path('ventas_diarias/<int:dia>/<int:mes>/<int:ano>/', ventas_diarias),
]
