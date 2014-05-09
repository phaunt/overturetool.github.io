---
layout: listing
title: graph-ed
---

~~~
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
~~~
###graph-ed.vdmsl

~~~


module GRAPH
   exports all
definitions
types
   Point :: xcoord : nat
   LineSegment :: end1 : Point
   inv mk_LineSegment(end1, end2) ==
   Circle :: center : Point
   Ellipse :: center  : Point
   Polygon :: vertices : seq1 of Point
   inv mk_Polygon(points) ==
   Polyline :: vertices : seq1 of Point
   inv mk_Polyline(points) ==
   Box :: corner1 : Point
   inv mk_Box(corner1, corner2) ==
   ArcBox :: box : Box
   Text :: frame : Box
   inv mk_Text(frame, startpoint, string) ==
   Compound :: frame : Box
   inv mk_Compound(frame, components) ==
   Object = Circle | Ellipse | Polygon | Polyline | Box | ArcBox | Text | 
   Message = <SUCCESS> | <NOT_FIT> | <TEXT_NOT_FIT> |


state GraphEditor of
DRAWING_AREA : Box
OBJECTS : seq of Object
inv mk_GraphEditor(drawing_area, objects) ==
   drawing_area.corner1.xcoord = 0 and
   forall object in set elems objects &

init mk_GraphEditor(drawing_area, objects) ==
   drawing_area.corner1.xcoord = 0 and
end


functions
   point_on_line : Point * LineSegment +> bool
      (point.xcoord - line.end2.xcoord) * 
      (point.xcoord - line.end2.xcoord) < 
      (point.xcoord - line.end2.xcoord) * 

   point_on_circle : Point * Circle +> bool
      (circle.center.xcoord - point.xcoord) ** 2 +
      (circle.center.ycoord - point.ycoord) ** 2 = circle.radius ** 2;

   point_on_ellipse : Point * Ellipse +> bool
      ellipse.yradius ** 2 * (ellipse.center.xcoord - point.xcoord) ** 2 +
      ellipse.xradius ** 2 * (ellipse.center.ycoord - point.ycoord) ** 2 =
      ellipse.xradius ** 2 * ellipse.yradius ** 2;

   point_on_polygon : Point * Polygon +> bool
      exists index in set inds polygon.vertices &
         point_on_line(point, mk_LineSegment

   point_on_polyline : Point * Polyline +> bool
      exists index in set {i | i : nat1 
         point_on_line(point, mk_LineSegment

   point_on_box : Point * Box +> bool
      (((((point.xcoord >= box.corner1.xcoord) and 
         ((point.xcoord >= box.corner2.xcoord) and 
        ((point.ycoord = box.corner1.ycoord) or 
       ((((point.ycoord >= box.corner1.ycoord) and 
         ((point.ycoord >= box.corner2.ycoord) and 
        ((point.xcoord = box.corner1.xcoord) or 

   point_on_arcbox : Point * ArcBox +> bool
      point_on_box(point, arcbox.box);

   point_on_text : Point * Text +> bool
      point_within_box(point, text.frame);

   point_on_compound : Point * Compound +> bool
      point_on_box(point, compound.frame);

   point_on_object : Point * Object +> bool
      (is_Circle(object) and point_on_circle(point, object)) or

   point_within_box : Point * Box +> bool
      ((point.xcoord > box.corner1.xcoord and 
      ((point.ycoord > box.corner1.ycoord and 

   circle_within_box : Circle * Box +> bool
      point_within_box(mk_Point(circle.center.xcoord + circle.radius, 

   ellipse_within_box : Ellipse * Box +> bool
      point_within_box(mk_Point(ellipse.center.xcoord + ellipse.xradius, 

   polygon_within_box : Polygon * Box +> bool
      forall vertex in set elems polygon.vertices &

   polyline_within_box : Polyline * Box +> bool
      forall vertex in set elems polyline.vertices &

   box_within_box : Box * Box +> bool
      point_within_box(box1.corner1, box2) and 

   object_within_box : Object * Box +> bool
      (is_Circle(object) and circle_within_box(object, box)) or

   copy_point(point : Point, vector : LineSegment) newpoint : Point
   post
      newpoint.xcoord = point.xcoord + 

   copy_points(points : seq1 of Point, vector : LineSegment) 
   post
      len points = len newpoints and
      forall i in set inds points &
         newpoints(i) = copy_point(points(i), vector);

   make_copy_object(obj : Object, vector : LineSegment) newobj : Object
   post
      (is_Circle(obj) and 
      (is_Ellipse(obj) and 
      (is_Polygon(obj) and 
      (is_Polyline(obj) and 
      (is_Box(obj) and 
      (is_ArcBox(obj) and 
      (is_Text(obj) and 
      (is_Compound(obj) and 

   make_copy_objects(objs : seq1 of Object, vector : LineSegment) 
   post
      len newobjs = len objs and
      newobjs = [make_copy_object(objs(i), vector) | i in set inds objs]

operations
   create_circle(center : Point, radius : nat1) msg : Message
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      circle_within_box(mk_Circle(center, radius), DRAWING_AREA)
   post
      OBJECTS = [mk_Circle(center, radius)] ^ OBJECTS~ and msg = <SUCCESS>
   errs
      NOT_FIT : not circle_within_box(mk_Circle(center, radius), DRAWING_AREA) 

   create_ellipse(center : Point, xradius : nat1, yradius : nat1) msg : Message
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      ellipse_within_box(mk_Ellipse(center, xradius, yradius), DRAWING_AREA)
   post
      OBJECTS = [mk_Ellipse(center, xradius, yradius)] ^ OBJECTS~ and 
   errs
      NOT_FIT : not ellipse_within_box(mk_Ellipse(center, xradius, yradius), 

   create_polygon(vertices : seq1 of Point) msg : Message
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      polygon_within_box(mk_Polygon(vertices), DRAWING_AREA)
   post
      OBJECTS = [mk_Polygon(vertices)] ^ OBJECTS~ and msg = <SUCCESS>
   errs
      NOT_FIT : not polygon_within_box(mk_Polygon(vertices), DRAWING_AREA)

   create_polyline(vertices : seq1 of Point) msg : Message
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      polyline_within_box(mk_Polyline(vertices), DRAWING_AREA)
   post
      OBJECTS = [mk_Polyline(vertices)] ^ OBJECTS~ and msg = <SUCCESS>
   errs
      NOT_FIT : not polyline_within_box(mk_Polyline(vertices), 
   create_box(corner1 : Point, corner2 : Point) msg : Message
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      box_within_box(mk_Box(corner1, corner2), DRAWING_AREA)
   post
      OBJECTS = [mk_Box(corner1, corner2)] ^ OBJECTS~ and 
   errs
      NOT_FIT : not box_within_box(mk_Box(corner1, corner2), 

   create_arcbox(corner1 : Point, corner2 : Point, cornerradius : nat1) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      box_within_box(mk_Box(corner1, corner2), DRAWING_AREA)
   post
      OBJECTS = [mk_ArcBox(mk_Box(corner1, corner2), cornerradius)] ^ 
   errs
      NOT_FIT : not box_within_box(mk_Box(corner1, corner2), 

   create_text(corner1 : Point, corner2 : Point, 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      box_within_box(mk_Box(corner1, corner2), DRAWING_AREA) and
      abs (corner1.ycoord - corner2.ycoord) >= 20 and
      point_within_box(startpoint, mk_Box(corner1, corner2)) and
      (corner1.ycoord < corner2.ycoord and
   post
      OBJECTS = [mk_Text(mk_Box(corner1, corner2), startpoint, string)] ^ 
   errs
      NOT_FIT : not box_within_box(mk_Box(corner1, corner2), 
      FRAME_SIZE : abs (corner1.ycoord - corner2.ycoord) < 20
      START_POINT : not point_within_box(startpoint, 
      TEXT_NOT_FIT : corner1.ycoord < corner2.ycoord and

   create_compound_object(corner1 : Point, corner2 : Point) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      box_within_box(mk_Box(corner1, corner2), 
      exists object in set elems OBJECTS &
         object_within_box(object, mk_Box(corner1, corner2))
   post
      let components : seq1 of Object =
      OBJECTS = [mk_Compound(mk_Box(corner1, corner2), components)] ^
   errs
      NOT_FIT : not box_within_box(mk_Box(corner1, corner2), 
      NO_COMPONENT : not exists object in set elems OBJECTS &
                         object_within_box(object, 
                     -> OBJECTS = OBJECTS~ and msg = <NO_COMPONENT>;

   select_object(click : Point) object : [Object]
   ext rd DRAWING_AREA : Box
       rd OBJECTS : seq of Object
   pre
      point_within_box(click, DRAWING_AREA)
   post
      object in set elems OBJECTS and 
      forall i in set {index | index : nat1, j : nat1 &
                        index in set inds OBJECTS and 
          not point_on_object(click, OBJECTS(i))
   errs
      NO_SELECT : not exists obj in set elems OBJECTS &
                     point_on_object(click, obj) -> 

   decompose_compound_object(object : Object) msg : Message
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      is_Compound(object) and object in set elems OBJECTS
   post
      OBJECTS = object.components ^
   errs
      NOT_COMPOUND : not is_Compound(object) -> 

   delete_object(object : Object)
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      object in set elems OBJECTS
   post
      OBJECTS = [OBJECTS~(i) | i in set inds OBJECTS~ 

   move_object(object : Object, vector : LineSegment) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      object in set elems OBJECTS
   post
      is_Compound(object) and 
      not is_Compound(object) and 

   move_simple_object(object : Object, vector : LineSegment) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      object in set elems OBJECTS and 
      object_within_box(make_copy_object(object, vector), 
   post
      OBJECTS = [make_copy_object(object, vector)] ^ 
   errs
      NOT_FIT : not object_within_box(make_copy_object(object, vector), 

   move_compound_object(compound : Compound, vector : LineSegment) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      compound in set elems OBJECTS and
      object_within_box(make_copy_object(compound.frame, vector), 
   post
      OBJECTS = [make_copy_object(compound, vector)] ^ 
   errs
      NOT_FIT : not object_within_box(make_copy_object(compound.frame, 

   copy_object(object : Object, vector : LineSegment) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      object in set elems OBJECTS
   post
      is_Compound(object) and 
      not is_Compound(object) and 

   copy_simple_object(object : Object, vector : LineSegment) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      object in set elems OBJECTS and 
      object_within_box(make_copy_object(object, vector), 
   post
      OBJECTS = [make_copy_object(object, vector)] ^ OBJECTS~ and 
   errs
      NOT_FIT : not object_within_box(make_copy_object(object, vector), 

   copy_compound_object(compound : Compound, vector : LineSegment) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      compound in set elems OBJECTS and is_Compound(compound) and
      object_within_box(make_copy_object(compound.frame, vector), 
   post
      OBJECTS = [make_copy_object(compound, vector)] ^ OBJECTS~ and 
   errs
      NOT_FIT : not object_within_box(make_copy_object(compound.frame, 

   resize_circle(circle : Circle, new_radius : nat1) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      circle in set elems OBJECTS and
      circle_within_box(mk_Circle(circle.center, new_radius), 
   post
      OBJECTS = [mk_Circle(circle.center, new_radius)] ^
   errs
      NOT_FIT : not circle_within_box(mk_Circle(circle.center, new_radius), 

   resize_ellipse(ellipse : Ellipse, new_xradius : nat1, 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      ellipse in set elems OBJECTS and
      ellipse_within_box(mk_Ellipse(ellipse.center, 
   post
      OBJECTS = [mk_Ellipse(ellipse.center, new_xradius, new_yradius)] ^
   errs
      NOT_FIT : not ellipse_within_box(mk_Ellipse(ellipse.center, 

   resize_polygon(polygon : Polygon, new_vertices : seq1 of Point) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      polygon in set elems OBJECTS and
      len new_vertices = len polygon.vertices and
      polygon_within_box(mk_Polygon(new_vertices), DRAWING_AREA)
   post
      OBJECTS = [mk_Polygon(new_vertices)] ^
   errs
      NUM_VERTICES : len new_vertices <> len polygon.vertices
      NOT_FIT : not polygon_within_box(mk_Polygon(new_vertices), 

   resize_polyline(polyline : Polyline, new_vertices : seq1 of Point) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      polyline in set elems OBJECTS and
      len new_vertices = len polyline.vertices and
      polyline_within_box(mk_Polyline(new_vertices), DRAWING_AREA)
   post
      OBJECTS = [mk_Polyline(new_vertices)] ^
   errs
      NUM_VERTICES : len new_vertices <> len polyline.vertices
      NOT_FIT : not polyline_within_box(mk_Polyline(new_vertices), 

   resize_box(box : Box, new_corner1 : Point, new_corner2 : Point) 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      box in set elems OBJECTS and
      box_within_box(mk_Box(new_corner1, new_corner2), 
   post
      OBJECTS = [mk_Box(new_corner1, new_corner2)] ^
   errs
      NOT_FIT : not box_within_box(mk_Box(new_corner1, new_corner2), 

   resize_arcbox(arcbox : ArcBox, new_corner1 : Point, 
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      arcbox in set elems OBJECTS and
      box_within_box(mk_Box(new_corner1, new_corner2), 
   post
      OBJECTS = [mk_ArcBox(mk_Box(new_corner1, new_corner2), 
   errs
      NOT_FIT : not box_within_box(mk_Box(new_corner1, new_corner2), 

   edit_text(text : Text, new_corner1 : Point, new_corner2 : Point,
   ext rd DRAWING_AREA : Box
       wr OBJECTS : seq of Object
   pre
      text in set elems OBJECTS and
      box_within_box(mk_Box(new_corner1, new_corner2), DRAWING_AREA) and
      abs (new_corner1.ycoord - new_corner2.ycoord) >= 20 and
      point_within_box(new_start_point, mk_Box(new_corner1, new_corner2)) and
      (new_corner1.ycoord < new_corner2.ycoord and
   post
      OBJECTS = [mk_Text(mk_Box(new_corner1, new_corner2), 
   errs
      NOT_FIT : not box_within_box(mk_Box(new_corner1, new_corner2), 
      FRAME_SIZE : abs (new_corner1.ycoord - new_corner2.ycoord) < 20
      START_POINT : not point_within_box(new_start_point, 
      TEXT_NOT_FIT : new_corner1.ycoord < new_corner2.ycoord and
end GRAPH


~~~