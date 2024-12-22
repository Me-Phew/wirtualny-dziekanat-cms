import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres';

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('pl', 'en');
  CREATE TYPE "public"."enum_users_roles" AS ENUM('admin', 'user');
  CREATE TYPE "public"."enum_courses_of_study_course_type" AS ENUM('fullTime', 'partTime');
  CREATE TYPE "public"."enum_courses_of_study_level_of_study" AS ENUM('firstDegree', 'secondDegree', 'uniformMaster', 'postgraduate');
  CREATE TYPE "public"."enum_courses_of_study_obtained_title" AS ENUM('engineer', 'master', 'doctor');
  CREATE TYPE "public"."enum_lecturers_academic_titles" AS ENUM('BSc', 'MSc', 'PhD', 'DSc', 'prof');
  CREATE TYPE "public"."enum_schedules_week_afull_time_schedule_monday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_afull_time_schedule_tuesday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_afull_time_schedule_wednesday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_afull_time_schedule_thursday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_afull_time_schedule_friday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_a_part_time_schedule_saturday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_a_part_time_schedule_sunday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_bfull_time_schedule_monday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_bfull_time_schedule_tuesday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_bfull_time_schedule_wednesday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_bfull_time_schedule_thursday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_bfull_time_schedule_friday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_b_part_time_schedule_saturday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_schedules_week_b_part_time_schedule_sunday_form" AS ENUM('lecture', 'exercises', 'lab', 'project', 'language', 'practice', 'seminar', 'consultation', 'exam', 'other');
  CREATE TYPE "public"."enum_announcements_priority" AS ENUM('low', 'medium', 'high');
  CREATE TABLE IF NOT EXISTS "users_roles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_users_roles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"_verified" boolean,
  	"_verificationtoken" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "images" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "videos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "universities_contact_phone_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phone_number" varchar NOT NULL,
  	"info" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "universities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"deaneary_address_country" varchar DEFAULT 'Polska' NOT NULL,
  	"deaneary_address_zip_code" varchar NOT NULL,
  	"deaneary_address_city" varchar NOT NULL,
  	"deaneary_address_street" varchar NOT NULL,
  	"deaneary_address_building_number" varchar NOT NULL,
  	"contact_email" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "universities_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"faculties_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "faculties_contact_phone_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phone_number" varchar NOT NULL,
  	"info" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "faculties" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"university_id" integer,
  	"address_country" varchar DEFAULT 'Polska' NOT NULL,
  	"address_zip_code" varchar NOT NULL,
  	"address_city" varchar NOT NULL,
  	"address_street" varchar NOT NULL,
  	"address_building_number" varchar NOT NULL,
  	"contact_email" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "faculties_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"classrooms_id" integer,
  	"courses_of_study_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "classrooms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"faculty_id" integer,
  	"floor_number" numeric NOT NULL,
  	"room_number" numeric NOT NULL,
  	"title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "courses_of_study" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"field_of_study" varchar NOT NULL,
  	"faculty_id" integer,
  	"schedule_id" integer NOT NULL,
  	"course_type" "enum_courses_of_study_course_type" NOT NULL,
  	"level_of_study" "enum_courses_of_study_level_of_study" NOT NULL,
  	"obtained_title" "enum_courses_of_study_obtained_title" NOT NULL,
  	"number_of_semesters" numeric NOT NULL,
  	"current_semester" numeric DEFAULT 1 NOT NULL,
  	"start_date" timestamp(3) with time zone NOT NULL,
  	"end_date" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "lecturers_academic_titles" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_lecturers_academic_titles",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "lecturers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar NOT NULL,
  	"middle_name" varchar,
  	"family_name" varchar NOT NULL,
  	"title" varchar,
  	"profile_picture_id" integer,
  	"address_street" varchar NOT NULL,
  	"address_city" varchar NOT NULL,
  	"address_zip_code" varchar NOT NULL,
  	"phone_number" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "student_profile_pictures" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "students" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"username" varchar,
  	"first_name" varchar NOT NULL,
  	"middle_name" varchar,
  	"family_name" varchar NOT NULL,
  	"pesel" varchar NOT NULL,
  	"date_of_birth" timestamp(3) with time zone,
  	"profile_picture_id" integer,
  	"index_number" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "students_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"courses_of_study_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_afull_time_schedule_monday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_afull_time_schedule_monday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_afull_time_schedule_tuesday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_afull_time_schedule_tuesday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_afull_time_schedule_wednesday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_afull_time_schedule_wednesday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_afull_time_schedule_thursday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_afull_time_schedule_thursday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_afull_time_schedule_friday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_afull_time_schedule_friday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_a_part_time_schedule_saturday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_a_part_time_schedule_saturday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_a_part_time_schedule_sunday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_a_part_time_schedule_sunday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_bfull_time_schedule_monday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_bfull_time_schedule_monday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_bfull_time_schedule_tuesday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_bfull_time_schedule_tuesday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_bfull_time_schedule_wednesday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_bfull_time_schedule_wednesday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_bfull_time_schedule_thursday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_bfull_time_schedule_thursday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_bfull_time_schedule_friday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_bfull_time_schedule_friday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_b_part_time_schedule_saturday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_b_part_time_schedule_saturday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules_week_b_part_time_schedule_sunday" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"lecturer_id" integer NOT NULL,
  	"form" "enum_schedules_week_b_part_time_schedule_sunday_form" NOT NULL,
  	"start_time" timestamp(3) with time zone NOT NULL,
  	"number_of_hours" numeric NOT NULL,
  	"classroom_id" integer,
  	"is_online" boolean DEFAULT false NOT NULL,
  	"end_time" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "schedules" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"course_of_study_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "announcements_recipients" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"recipient_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "announcements" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"sender_id" integer,
  	"subject" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"content_html" varchar,
  	"priority" "enum_announcements_priority" DEFAULT 'low',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"images_id" integer,
  	"videos_id" integer,
  	"universities_id" integer,
  	"faculties_id" integer,
  	"classrooms_id" integer,
  	"courses_of_study_id" integer,
  	"lecturers_id" integer,
  	"student_profile_pictures_id" integer,
  	"students_id" integer,
  	"schedules_id" integer,
  	"announcements_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"students_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "universities_contact_phone_numbers" ADD CONSTRAINT "universities_contact_phone_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."universities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "universities_rels" ADD CONSTRAINT "universities_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."universities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "universities_rels" ADD CONSTRAINT "universities_rels_faculties_fk" FOREIGN KEY ("faculties_id") REFERENCES "public"."faculties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faculties_contact_phone_numbers" ADD CONSTRAINT "faculties_contact_phone_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faculties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faculties" ADD CONSTRAINT "faculties_university_id_universities_id_fk" FOREIGN KEY ("university_id") REFERENCES "public"."universities"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faculties_rels" ADD CONSTRAINT "faculties_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."faculties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faculties_rels" ADD CONSTRAINT "faculties_rels_classrooms_fk" FOREIGN KEY ("classrooms_id") REFERENCES "public"."classrooms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faculties_rels" ADD CONSTRAINT "faculties_rels_courses_of_study_fk" FOREIGN KEY ("courses_of_study_id") REFERENCES "public"."courses_of_study"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "classrooms" ADD CONSTRAINT "classrooms_faculty_id_faculties_id_fk" FOREIGN KEY ("faculty_id") REFERENCES "public"."faculties"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "courses_of_study" ADD CONSTRAINT "courses_of_study_faculty_id_faculties_id_fk" FOREIGN KEY ("faculty_id") REFERENCES "public"."faculties"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "courses_of_study" ADD CONSTRAINT "courses_of_study_schedule_id_schedules_id_fk" FOREIGN KEY ("schedule_id") REFERENCES "public"."schedules"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "lecturers_academic_titles" ADD CONSTRAINT "lecturers_academic_titles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."lecturers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "lecturers" ADD CONSTRAINT "lecturers_profile_picture_id_student_profile_pictures_id_fk" FOREIGN KEY ("profile_picture_id") REFERENCES "public"."student_profile_pictures"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "students" ADD CONSTRAINT "students_profile_picture_id_student_profile_pictures_id_fk" FOREIGN KEY ("profile_picture_id") REFERENCES "public"."student_profile_pictures"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "students_rels" ADD CONSTRAINT "students_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."students"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "students_rels" ADD CONSTRAINT "students_rels_courses_of_study_fk" FOREIGN KEY ("courses_of_study_id") REFERENCES "public"."courses_of_study"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_monday" ADD CONSTRAINT "schedules_week_afull_time_schedule_monday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_monday" ADD CONSTRAINT "schedules_week_afull_time_schedule_monday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_monday" ADD CONSTRAINT "schedules_week_afull_time_schedule_monday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_tuesday" ADD CONSTRAINT "schedules_week_afull_time_schedule_tuesday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_tuesday" ADD CONSTRAINT "schedules_week_afull_time_schedule_tuesday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_tuesday" ADD CONSTRAINT "schedules_week_afull_time_schedule_tuesday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_wednesday" ADD CONSTRAINT "schedules_week_afull_time_schedule_wednesday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_wednesday" ADD CONSTRAINT "schedules_week_afull_time_schedule_wednesday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_wednesday" ADD CONSTRAINT "schedules_week_afull_time_schedule_wednesday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_thursday" ADD CONSTRAINT "schedules_week_afull_time_schedule_thursday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_thursday" ADD CONSTRAINT "schedules_week_afull_time_schedule_thursday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_thursday" ADD CONSTRAINT "schedules_week_afull_time_schedule_thursday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_friday" ADD CONSTRAINT "schedules_week_afull_time_schedule_friday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_friday" ADD CONSTRAINT "schedules_week_afull_time_schedule_friday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_afull_time_schedule_friday" ADD CONSTRAINT "schedules_week_afull_time_schedule_friday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_a_part_time_schedule_saturday" ADD CONSTRAINT "schedules_week_a_part_time_schedule_saturday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_a_part_time_schedule_saturday" ADD CONSTRAINT "schedules_week_a_part_time_schedule_saturday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_a_part_time_schedule_saturday" ADD CONSTRAINT "schedules_week_a_part_time_schedule_saturday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_a_part_time_schedule_sunday" ADD CONSTRAINT "schedules_week_a_part_time_schedule_sunday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_a_part_time_schedule_sunday" ADD CONSTRAINT "schedules_week_a_part_time_schedule_sunday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_a_part_time_schedule_sunday" ADD CONSTRAINT "schedules_week_a_part_time_schedule_sunday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_monday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_monday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_monday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_monday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_monday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_monday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_tuesday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_tuesday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_tuesday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_tuesday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_tuesday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_tuesday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_wednesday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_wednesday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_wednesday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_wednesday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_wednesday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_wednesday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_thursday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_thursday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_thursday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_thursday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_thursday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_thursday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_friday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_friday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_friday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_friday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_bfull_time_schedule_friday" ADD CONSTRAINT "schedules_week_bfull_time_schedule_friday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_b_part_time_schedule_saturday" ADD CONSTRAINT "schedules_week_b_part_time_schedule_saturday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_b_part_time_schedule_saturday" ADD CONSTRAINT "schedules_week_b_part_time_schedule_saturday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_b_part_time_schedule_saturday" ADD CONSTRAINT "schedules_week_b_part_time_schedule_saturday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_b_part_time_schedule_sunday" ADD CONSTRAINT "schedules_week_b_part_time_schedule_sunday_lecturer_id_lecturers_id_fk" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_b_part_time_schedule_sunday" ADD CONSTRAINT "schedules_week_b_part_time_schedule_sunday_classroom_id_classrooms_id_fk" FOREIGN KEY ("classroom_id") REFERENCES "public"."classrooms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules_week_b_part_time_schedule_sunday" ADD CONSTRAINT "schedules_week_b_part_time_schedule_sunday_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "schedules" ADD CONSTRAINT "schedules_course_of_study_id_courses_of_study_id_fk" FOREIGN KEY ("course_of_study_id") REFERENCES "public"."courses_of_study"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "announcements_recipients" ADD CONSTRAINT "announcements_recipients_recipient_id_users_id_fk" FOREIGN KEY ("recipient_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "announcements_recipients" ADD CONSTRAINT "announcements_recipients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."announcements"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "announcements" ADD CONSTRAINT "announcements_sender_id_users_id_fk" FOREIGN KEY ("sender_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_videos_fk" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_universities_fk" FOREIGN KEY ("universities_id") REFERENCES "public"."universities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faculties_fk" FOREIGN KEY ("faculties_id") REFERENCES "public"."faculties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_classrooms_fk" FOREIGN KEY ("classrooms_id") REFERENCES "public"."classrooms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_courses_of_study_fk" FOREIGN KEY ("courses_of_study_id") REFERENCES "public"."courses_of_study"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_lecturers_fk" FOREIGN KEY ("lecturers_id") REFERENCES "public"."lecturers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_student_profile_pictures_fk" FOREIGN KEY ("student_profile_pictures_id") REFERENCES "public"."student_profile_pictures"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_students_fk" FOREIGN KEY ("students_id") REFERENCES "public"."students"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_schedules_fk" FOREIGN KEY ("schedules_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_announcements_fk" FOREIGN KEY ("announcements_id") REFERENCES "public"."announcements"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_students_fk" FOREIGN KEY ("students_id") REFERENCES "public"."students"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_roles_order_idx" ON "users_roles" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_roles_parent_idx" ON "users_roles" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "images_updated_at_idx" ON "images" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "images_created_at_idx" ON "images" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "images_filename_idx" ON "images" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "videos_updated_at_idx" ON "videos" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "videos_created_at_idx" ON "videos" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "videos_filename_idx" ON "videos" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "universities_contact_phone_numbers_order_idx" ON "universities_contact_phone_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "universities_contact_phone_numbers_parent_id_idx" ON "universities_contact_phone_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "universities_updated_at_idx" ON "universities" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "universities_created_at_idx" ON "universities" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "universities_rels_order_idx" ON "universities_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "universities_rels_parent_idx" ON "universities_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "universities_rels_path_idx" ON "universities_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "universities_rels_faculties_id_idx" ON "universities_rels" USING btree ("faculties_id");
  CREATE INDEX IF NOT EXISTS "faculties_contact_phone_numbers_order_idx" ON "faculties_contact_phone_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "faculties_contact_phone_numbers_parent_id_idx" ON "faculties_contact_phone_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "faculties_university_idx" ON "faculties" USING btree ("university_id");
  CREATE INDEX IF NOT EXISTS "faculties_updated_at_idx" ON "faculties" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "faculties_created_at_idx" ON "faculties" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "faculties_rels_order_idx" ON "faculties_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "faculties_rels_parent_idx" ON "faculties_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "faculties_rels_path_idx" ON "faculties_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "faculties_rels_classrooms_id_idx" ON "faculties_rels" USING btree ("classrooms_id");
  CREATE INDEX IF NOT EXISTS "faculties_rels_courses_of_study_id_idx" ON "faculties_rels" USING btree ("courses_of_study_id");
  CREATE INDEX IF NOT EXISTS "classrooms_faculty_idx" ON "classrooms" USING btree ("faculty_id");
  CREATE INDEX IF NOT EXISTS "classrooms_updated_at_idx" ON "classrooms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "classrooms_created_at_idx" ON "classrooms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "courses_of_study_faculty_idx" ON "courses_of_study" USING btree ("faculty_id");
  CREATE INDEX IF NOT EXISTS "courses_of_study_schedule_idx" ON "courses_of_study" USING btree ("schedule_id");
  CREATE INDEX IF NOT EXISTS "courses_of_study_updated_at_idx" ON "courses_of_study" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "courses_of_study_created_at_idx" ON "courses_of_study" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "lecturers_academic_titles_order_idx" ON "lecturers_academic_titles" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "lecturers_academic_titles_parent_idx" ON "lecturers_academic_titles" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "lecturers_profile_picture_idx" ON "lecturers" USING btree ("profile_picture_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "lecturers_email_idx" ON "lecturers" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "lecturers_updated_at_idx" ON "lecturers" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "lecturers_created_at_idx" ON "lecturers" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "student_profile_pictures_updated_at_idx" ON "student_profile_pictures" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "student_profile_pictures_created_at_idx" ON "student_profile_pictures" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "student_profile_pictures_filename_idx" ON "student_profile_pictures" USING btree ("filename");
  CREATE UNIQUE INDEX IF NOT EXISTS "students_pesel_idx" ON "students" USING btree ("pesel");
  CREATE INDEX IF NOT EXISTS "students_profile_picture_idx" ON "students" USING btree ("profile_picture_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "students_index_number_idx" ON "students" USING btree ("index_number");
  CREATE INDEX IF NOT EXISTS "students_updated_at_idx" ON "students" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "students_created_at_idx" ON "students" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "students_email_idx" ON "students" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "students_rels_order_idx" ON "students_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "students_rels_parent_idx" ON "students_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "students_rels_path_idx" ON "students_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "students_rels_courses_of_study_id_idx" ON "students_rels" USING btree ("courses_of_study_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_monday_order_idx" ON "schedules_week_afull_time_schedule_monday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_monday_parent_id_idx" ON "schedules_week_afull_time_schedule_monday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_monday_lecturer_idx" ON "schedules_week_afull_time_schedule_monday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_monday_classroom_idx" ON "schedules_week_afull_time_schedule_monday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_tuesday_order_idx" ON "schedules_week_afull_time_schedule_tuesday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_tuesday_parent_id_idx" ON "schedules_week_afull_time_schedule_tuesday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_tuesday_lecturer_idx" ON "schedules_week_afull_time_schedule_tuesday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_tuesday_classroom_idx" ON "schedules_week_afull_time_schedule_tuesday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_wednesday_order_idx" ON "schedules_week_afull_time_schedule_wednesday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_wednesday_parent_id_idx" ON "schedules_week_afull_time_schedule_wednesday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_wednesday_lecturer_idx" ON "schedules_week_afull_time_schedule_wednesday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_wednesday_classroom_idx" ON "schedules_week_afull_time_schedule_wednesday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_thursday_order_idx" ON "schedules_week_afull_time_schedule_thursday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_thursday_parent_id_idx" ON "schedules_week_afull_time_schedule_thursday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_thursday_lecturer_idx" ON "schedules_week_afull_time_schedule_thursday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_thursday_classroom_idx" ON "schedules_week_afull_time_schedule_thursday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_friday_order_idx" ON "schedules_week_afull_time_schedule_friday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_friday_parent_id_idx" ON "schedules_week_afull_time_schedule_friday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_friday_lecturer_idx" ON "schedules_week_afull_time_schedule_friday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_afull_time_schedule_friday_classroom_idx" ON "schedules_week_afull_time_schedule_friday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_a_part_time_schedule_saturday_order_idx" ON "schedules_week_a_part_time_schedule_saturday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_a_part_time_schedule_saturday_parent_id_idx" ON "schedules_week_a_part_time_schedule_saturday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_a_part_time_schedule_saturday_lecturer_idx" ON "schedules_week_a_part_time_schedule_saturday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_a_part_time_schedule_saturday_classroom_idx" ON "schedules_week_a_part_time_schedule_saturday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_a_part_time_schedule_sunday_order_idx" ON "schedules_week_a_part_time_schedule_sunday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_a_part_time_schedule_sunday_parent_id_idx" ON "schedules_week_a_part_time_schedule_sunday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_a_part_time_schedule_sunday_lecturer_idx" ON "schedules_week_a_part_time_schedule_sunday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_a_part_time_schedule_sunday_classroom_idx" ON "schedules_week_a_part_time_schedule_sunday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_monday_order_idx" ON "schedules_week_bfull_time_schedule_monday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_monday_parent_id_idx" ON "schedules_week_bfull_time_schedule_monday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_monday_lecturer_idx" ON "schedules_week_bfull_time_schedule_monday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_monday_classroom_idx" ON "schedules_week_bfull_time_schedule_monday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_tuesday_order_idx" ON "schedules_week_bfull_time_schedule_tuesday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_tuesday_parent_id_idx" ON "schedules_week_bfull_time_schedule_tuesday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_tuesday_lecturer_idx" ON "schedules_week_bfull_time_schedule_tuesday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_tuesday_classroom_idx" ON "schedules_week_bfull_time_schedule_tuesday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_wednesday_order_idx" ON "schedules_week_bfull_time_schedule_wednesday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_wednesday_parent_id_idx" ON "schedules_week_bfull_time_schedule_wednesday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_wednesday_lecturer_idx" ON "schedules_week_bfull_time_schedule_wednesday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_wednesday_classroom_idx" ON "schedules_week_bfull_time_schedule_wednesday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_thursday_order_idx" ON "schedules_week_bfull_time_schedule_thursday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_thursday_parent_id_idx" ON "schedules_week_bfull_time_schedule_thursday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_thursday_lecturer_idx" ON "schedules_week_bfull_time_schedule_thursday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_thursday_classroom_idx" ON "schedules_week_bfull_time_schedule_thursday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_friday_order_idx" ON "schedules_week_bfull_time_schedule_friday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_friday_parent_id_idx" ON "schedules_week_bfull_time_schedule_friday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_friday_lecturer_idx" ON "schedules_week_bfull_time_schedule_friday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_bfull_time_schedule_friday_classroom_idx" ON "schedules_week_bfull_time_schedule_friday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_b_part_time_schedule_saturday_order_idx" ON "schedules_week_b_part_time_schedule_saturday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_b_part_time_schedule_saturday_parent_id_idx" ON "schedules_week_b_part_time_schedule_saturday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_b_part_time_schedule_saturday_lecturer_idx" ON "schedules_week_b_part_time_schedule_saturday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_b_part_time_schedule_saturday_classroom_idx" ON "schedules_week_b_part_time_schedule_saturday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_b_part_time_schedule_sunday_order_idx" ON "schedules_week_b_part_time_schedule_sunday" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "schedules_week_b_part_time_schedule_sunday_parent_id_idx" ON "schedules_week_b_part_time_schedule_sunday" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_b_part_time_schedule_sunday_lecturer_idx" ON "schedules_week_b_part_time_schedule_sunday" USING btree ("lecturer_id");
  CREATE INDEX IF NOT EXISTS "schedules_week_b_part_time_schedule_sunday_classroom_idx" ON "schedules_week_b_part_time_schedule_sunday" USING btree ("classroom_id");
  CREATE INDEX IF NOT EXISTS "schedules_course_of_study_idx" ON "schedules" USING btree ("course_of_study_id");
  CREATE INDEX IF NOT EXISTS "schedules_updated_at_idx" ON "schedules" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "schedules_created_at_idx" ON "schedules" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "announcements_recipients_order_idx" ON "announcements_recipients" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "announcements_recipients_parent_id_idx" ON "announcements_recipients" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "announcements_recipients_recipient_idx" ON "announcements_recipients" USING btree ("recipient_id");
  CREATE INDEX IF NOT EXISTS "announcements_sender_idx" ON "announcements" USING btree ("sender_id");
  CREATE INDEX IF NOT EXISTS "announcements_updated_at_idx" ON "announcements" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "announcements_created_at_idx" ON "announcements" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_images_id_idx" ON "payload_locked_documents_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_videos_id_idx" ON "payload_locked_documents_rels" USING btree ("videos_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_universities_id_idx" ON "payload_locked_documents_rels" USING btree ("universities_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_faculties_id_idx" ON "payload_locked_documents_rels" USING btree ("faculties_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_classrooms_id_idx" ON "payload_locked_documents_rels" USING btree ("classrooms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_courses_of_study_id_idx" ON "payload_locked_documents_rels" USING btree ("courses_of_study_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_lecturers_id_idx" ON "payload_locked_documents_rels" USING btree ("lecturers_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_student_profile_pictures_id_idx" ON "payload_locked_documents_rels" USING btree ("student_profile_pictures_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_students_id_idx" ON "payload_locked_documents_rels" USING btree ("students_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_schedules_id_idx" ON "payload_locked_documents_rels" USING btree ("schedules_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_announcements_id_idx" ON "payload_locked_documents_rels" USING btree ("announcements_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_students_id_idx" ON "payload_preferences_rels" USING btree ("students_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_roles" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "images" CASCADE;
  DROP TABLE "videos" CASCADE;
  DROP TABLE "universities_contact_phone_numbers" CASCADE;
  DROP TABLE "universities" CASCADE;
  DROP TABLE "universities_rels" CASCADE;
  DROP TABLE "faculties_contact_phone_numbers" CASCADE;
  DROP TABLE "faculties" CASCADE;
  DROP TABLE "faculties_rels" CASCADE;
  DROP TABLE "classrooms" CASCADE;
  DROP TABLE "courses_of_study" CASCADE;
  DROP TABLE "lecturers_academic_titles" CASCADE;
  DROP TABLE "lecturers" CASCADE;
  DROP TABLE "student_profile_pictures" CASCADE;
  DROP TABLE "students" CASCADE;
  DROP TABLE "students_rels" CASCADE;
  DROP TABLE "schedules_week_afull_time_schedule_monday" CASCADE;
  DROP TABLE "schedules_week_afull_time_schedule_tuesday" CASCADE;
  DROP TABLE "schedules_week_afull_time_schedule_wednesday" CASCADE;
  DROP TABLE "schedules_week_afull_time_schedule_thursday" CASCADE;
  DROP TABLE "schedules_week_afull_time_schedule_friday" CASCADE;
  DROP TABLE "schedules_week_a_part_time_schedule_saturday" CASCADE;
  DROP TABLE "schedules_week_a_part_time_schedule_sunday" CASCADE;
  DROP TABLE "schedules_week_bfull_time_schedule_monday" CASCADE;
  DROP TABLE "schedules_week_bfull_time_schedule_tuesday" CASCADE;
  DROP TABLE "schedules_week_bfull_time_schedule_wednesday" CASCADE;
  DROP TABLE "schedules_week_bfull_time_schedule_thursday" CASCADE;
  DROP TABLE "schedules_week_bfull_time_schedule_friday" CASCADE;
  DROP TABLE "schedules_week_b_part_time_schedule_saturday" CASCADE;
  DROP TABLE "schedules_week_b_part_time_schedule_sunday" CASCADE;
  DROP TABLE "schedules" CASCADE;
  DROP TABLE "announcements_recipients" CASCADE;
  DROP TABLE "announcements" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_users_roles";
  DROP TYPE "public"."enum_courses_of_study_course_type";
  DROP TYPE "public"."enum_courses_of_study_level_of_study";
  DROP TYPE "public"."enum_courses_of_study_obtained_title";
  DROP TYPE "public"."enum_lecturers_academic_titles";
  DROP TYPE "public"."enum_schedules_week_afull_time_schedule_monday_form";
  DROP TYPE "public"."enum_schedules_week_afull_time_schedule_tuesday_form";
  DROP TYPE "public"."enum_schedules_week_afull_time_schedule_wednesday_form";
  DROP TYPE "public"."enum_schedules_week_afull_time_schedule_thursday_form";
  DROP TYPE "public"."enum_schedules_week_afull_time_schedule_friday_form";
  DROP TYPE "public"."enum_schedules_week_a_part_time_schedule_saturday_form";
  DROP TYPE "public"."enum_schedules_week_a_part_time_schedule_sunday_form";
  DROP TYPE "public"."enum_schedules_week_bfull_time_schedule_monday_form";
  DROP TYPE "public"."enum_schedules_week_bfull_time_schedule_tuesday_form";
  DROP TYPE "public"."enum_schedules_week_bfull_time_schedule_wednesday_form";
  DROP TYPE "public"."enum_schedules_week_bfull_time_schedule_thursday_form";
  DROP TYPE "public"."enum_schedules_week_bfull_time_schedule_friday_form";
  DROP TYPE "public"."enum_schedules_week_b_part_time_schedule_saturday_form";
  DROP TYPE "public"."enum_schedules_week_b_part_time_schedule_sunday_form";
  DROP TYPE "public"."enum_announcements_priority";`);
}
