"""
URL configuration for incident_management_system project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view
from drf_yasg.views import get_schema_view as get_yasg_view
from drf_yasg import openapi
from rest_framework import permissions


schema_view = get_yasg_view(
    openapi.Info(
        title="Incident Management API",
        default_version='v1',
        description="API for managing incidents",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/incidents/', include('incidents.urls')),
    path('openapi/', schema_view.with_ui('swagger', cache_timeout=0), name='openapi-schema'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='redoc-schema'),
]

