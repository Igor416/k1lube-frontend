import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCategories } from "../api";
import { ICategory } from "../JSONTypes";

type Route = {
  path: string,
  label: string,
  image: string
}

type Group = {
  group: string,
  paths: Array<Route>
}

export function useRoutes() {
  const homeRoute: Route = useMemo(() => ({ path: '/', label: 'Home', image: '' }), [])
  const productRoute: Route = useMemo(() => ({ path: '/product', label: 'Товары', image: 'products' }), [])
  const [categories, setCategories] = useState<ICategory[]>([])
  const [activeRoute, setActiveRoute] = useState<Route>(homeRoute)
  const [activeGroup, setActiveGroup] = useState<Group>()
  const location = useLocation();

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  const routes = useMemo(() => [
    { 
      group: 'Компания', 
      paths: [
        { path: '/company-about-twc', label: 'О компании', image: 'about' },
        { path: '/company-production-facility', label: 'Предприятия', image: 'facility' },
        { path: '/company-global-partners', label: 'Партнеры', image: 'partners' },
      ] 
    },
    { 
      group: 'Почему K1 Lube', 
      paths: [
        { path: '/why-k1lube-korea-synthetic-baseoil', label: 'Корейское синтетическое масло', image: 'korea' },
        { path: '/why-k1lube-esterbased-organic-friction-modifier', label: 'Эфирный модификатор', image: 'ester' },
        { path: '/why-k1lube-pao-boosting-tech', label: 'Технология улучшения ПАО', image: 'pao' },
      ] 
    },
    { 
      group: 'Товары', 
      paths: categories.map(category => ({ path: `/products/${category.name}`, label: category.label, image: 'products' }))
    },
    { path: '/library', label: 'Библиотека', image: 'library' },
    { path: '/contacts', label: 'Контакты', image: 'contacts' },
    { path: '/partnership', label: 'Стать дистрибьютором', image: 'contacts' },
  ], [categories]);

  useEffect(() => {
    if (location.pathname.startsWith('/product/')) {
      setActiveGroup(undefined)
      setActiveRoute(productRoute)
      return
    }
    for (const route of routes) {
      if (route.group) {
        for (const path of route.paths) {
          if (path.path === location.pathname) {
            setActiveGroup(route)
            setActiveRoute(path)
            return
          }
        }
      } else {
        if (route.path === location.pathname) {
          setActiveGroup(undefined)
          setActiveRoute(route)
          return
        }
      }
    }
    setActiveGroup(undefined)
    setActiveRoute(homeRoute)
  }, [productRoute, homeRoute, location.pathname, routes])

  return {
    routes: routes,
    activeRoute: activeRoute,
    activeGroup: activeGroup
  }
}