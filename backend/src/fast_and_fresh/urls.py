
from django.contrib import admin
from django.urls import path, include
<<<<<<< HEAD
from fast_fresh.api.views import get_queryset
=======
from fast_fresh.api.views import query_set_1, query_set_2, query_set_3
>>>>>>> tutu

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('fast_fresh.api.urls')),
<<<<<<< HEAD
    path('query1/', get_queryset)
=======
    path('QUERIES_1/', query_set_1 ),
    path('QUERIES_2/', query_set_2 ),
    path('QUERIES_3/', query_set_3 ),
    path('QUERIES_3/<MesI>/<MesF>', query_set_3 ),
>>>>>>> tutu
]
